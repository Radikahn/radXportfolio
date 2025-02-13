"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { ttModernoir } from "@/styles/fonts"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className={ttModernoir.variable}>
      <body className="font-modernoir antialiased bg-[#0c090d]">
        <div className={`relative flex flex-col min-h-screen blur-load ${isLoaded ? "loaded" : ""}`}>
          <SiteHeader />
          <main className="flex-1 pt-[100px]">{children}</main>
        </div>
      </body>
    </html>
  )
}

