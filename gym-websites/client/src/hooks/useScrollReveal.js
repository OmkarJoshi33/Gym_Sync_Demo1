import { useRef } from "react"
import { useInView } from "framer-motion"

/**
 * useScrollReveal
 * Reusable hook for scroll-triggered reveal animations.
 * Signature: useScrollReveal({ once, margin })
 * Returns: { ref, inView }
 * Usage: const { ref, inView } = useScrollReveal({ margin: "-80px" })
 * Spread ref onto the element, pass inView to motion animate prop.
 */
export function useScrollReveal({ once = true, margin = "-60px" } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin })
  return { ref, inView }
}