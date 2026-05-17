import { useState, useEffect } from "react"

export function useTypingEffect(text, speed = 80, loop = false, loopDelay = 9000) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    setDisplayed("")
    let i = 0
    let timeout

    const type = () => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          if (loop) {
            timeout = setTimeout(() => {
              setDisplayed("")
              i = 0
              type()
            }, loopDelay)
          }
        }
      }, speed)

      return interval
    }

    const interval = type()

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text, speed, loop, loopDelay])

  return displayed
}