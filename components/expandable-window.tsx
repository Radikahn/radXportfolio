"use client"

import type React from "react"
import { useState } from "react"

interface ExpandableWindowProps {
  title: string
  children: React.ReactNode
}

export function ExpandableWindow({ title, children }: ExpandableWindowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`
        transition-all duration-300 ease-in-out overflow-hidden
        ${isExpanded ? "fixed top-[169px] left-0 right-0 z-50 h-[50vh] bg-[#0c090d] bg-opacity-95" : "glass h-20"}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`container mx-auto px-4 ${isExpanded ? "h-full overflow-auto" : ""}`}>
        <h2 className="text-xl font-bold text-[#d9d9d9] p-4">{title}</h2>
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

