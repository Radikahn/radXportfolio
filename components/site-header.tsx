"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "MC SERVERS", href: "/mc-servers" },
  { name: "FLIKR", href: "https://www.flickr.com/photos/201140708@N05/" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [prevScrollPos, setPrevScrollPos] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#0c090d] transition-all duration-300 ${
        visible ? "h-[100px]" : "h-[60px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div
          className={`h-full w-auto flex-shrink-0 transition-all duration-300 ${visible ? "scale-100" : "scale-75"}`}
        >
          <Link href="/" className="flex items-center h-full">
            {/* <Image
              src = ""
              alt="RS Logo"
              width={203}
              height={234}
              className="h-full w-auto object-contain transition-all duration-300"
              priority
            /> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <ul className="flex space-x-6 lg:space-x-12">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`font-modernoir text-[#d9d9d9] hover:text-[#dcc7be] transition-all duration-300 text-sm lg:text-base tracking-wider whitespace-nowrap ${
                    visible ? "" : "text-xs lg:text-sm"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#d9d9d9]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0c090d]">
              <nav className="flex flex-col gap-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-modernoir text-[#d9d9d9] hover:text-[#dcc7be] transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

