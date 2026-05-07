"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="ASRobotix Logo" width={40} height={40} className="rounded-full" />
            <span className="font-medium text-white">ASRobotix</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/minirobots" className="text-sm text-gray-300 hover:text-white transition-colors">
            Atomites
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/waitlist" className="text-sm text-gray-300 hover:text-white transition-colors">
            Join Waitlist
          </Link>
          <Link href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#contact">
            <Button
              variant="secondary"
              className="hidden md:flex bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
            >
              Get in Touch
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 md:hidden border-white/10 bg-white/5 text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <Link
              href="/"
              className="rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/minirobots"
              className="rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Atomites
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/waitlist"
              className="rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="pt-2">
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90">
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
