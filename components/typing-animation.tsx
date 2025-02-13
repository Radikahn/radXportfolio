"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
}

export function TypingAnimation({ text }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const minText = "Hello,"

  useEffect(() => {
    let timer: NodeJS.Timeout

    const fullText = text.length
    const minTextLength = minText.length
    const charsToAnimate = fullText - minTextLength

    // Calculate timings
    const typingSpeed = 150 // ms per character
    const deletingSpeed = 75 // ms per character
    const pauseAtFullText = 5000 // 5 seconds pause at full text
    const pauseAtMinText = 2000 // 2 seconds pause at min text

    // Total cycle time: ~20 seconds
    // Typing: ~3 seconds, Full text pause: 5 seconds, Deleting: ~1.5 seconds, Min text pause: 2 seconds

    const animateText = () => {
      if (!isDeleting && displayText !== text) {
        setDisplayText(text.slice(0, displayText.length + 1))
        timer = setTimeout(animateText, typingSpeed)
      } else if (isDeleting && displayText.length > minText.length) {
        setDisplayText(text.slice(0, displayText.length - 1))
        timer = setTimeout(animateText, deletingSpeed)
      } else if (displayText === text) {
        setIsDeleting(true)
        timer = setTimeout(animateText, pauseAtFullText)
      } else if (displayText === minText) {
        setIsDeleting(false)
        timer = setTimeout(animateText, pauseAtMinText)
      }
    }

    timer = setTimeout(animateText, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, displayText, isDeleting])

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc7be] mb-8 font-modernoir">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  )
}

