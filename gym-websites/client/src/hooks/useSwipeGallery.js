import { useState, useRef, useCallback } from "react"

const SWIPE_THRESHOLD = 40

export function useSwipeGallery(total) {
  const [current, setCurrent]   = useState(0)
  const [dragX, setDragX]       = useState(0)
  const [animating, setAnimating] = useState(false)

  const startXRef    = useRef(null)
  const dragDeltaRef = useRef(0)
  const draggingRef  = useRef(false)

  const goTo = useCallback((dir) => {
    if (animating) return
    setAnimating(true)
    setDragX(0)
    setCurrent((c) => {
      if (dir === "next") return (c + 1) % total
      return (c - 1 + total) % total
    })
    setTimeout(() => setAnimating(false), 500)
  }, [animating, total])

  const onDragStart = useCallback((clientX) => {
    if (animating) return
    startXRef.current    = clientX
    dragDeltaRef.current = 0
    draggingRef.current  = true
  }, [animating])

  const onDragMove = useCallback((clientX) => {
    if (!draggingRef.current || startXRef.current === null) return
    const delta = clientX - startXRef.current
    dragDeltaRef.current = delta
    setDragX(delta)
  }, [])

  const onDragEnd = useCallback(() => {
    if (!draggingRef.current) return
    draggingRef.current = false
    if (Math.abs(dragDeltaRef.current) > SWIPE_THRESHOLD) {
      goTo(dragDeltaRef.current < 0 ? "next" : "prev")
    } else {
      setDragX(0)
    }
    startXRef.current    = null
    dragDeltaRef.current = 0
  }, [goTo])

  const onDragCancel = useCallback(() => {
    if (!draggingRef.current) return
    draggingRef.current  = false
    startXRef.current    = null
    dragDeltaRef.current = 0
    setDragX(0)
  }, [])

  const onMouseDown = useCallback((e) => {
    e.preventDefault()
    onDragStart(e.clientX)
  }, [onDragStart])

  const onMouseMove = useCallback((e) => {
    if (!draggingRef.current) return
    e.preventDefault()
    onDragMove(e.clientX)
  }, [onDragMove])

  const onTouchStart = useCallback((e) => {
    onDragStart(e.touches[0].clientX)
  }, [onDragStart])

  const onTouchMove = useCallback((e) => {
    e.preventDefault()
    onDragMove(e.touches[0].clientX)
  }, [onDragMove])

  const handlers = {
    onMouseDown,
    onMouseMove,
    onMouseUp:    onDragEnd,
    onMouseLeave: onDragCancel,
    onTouchStart,
    onTouchEnd:   onDragEnd,
  }

  return {
    current,
    dragX,
    animating,
    isDragging: draggingRef,
    handlers,
    touchMoveHandler: onTouchMove,
  }
}