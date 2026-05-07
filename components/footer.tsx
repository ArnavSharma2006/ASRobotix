"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home page with the section
    if (pathname !== "/") {
      router.push(`/#${id}`)
      return
    }
    
    // If we're on the home page, scroll to the section
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center justify-center gap-3 mb-4 md:justify-start">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="ASRobotix Logo" width={40} height={40} className="rounded-full" />
                <span className="font-medium text-white">ASRobotix</span>
              </Link>
            </div>
            <p className="text-center text-sm leading-6 text-gray-400 mb-6 md:text-left md:text-base">
              Pioneering the future of collaborative robotics with breakthrough Atomite technology.
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              <Link
                href="https://www.linkedin.com/company/asrobotix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/asrobotix?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/asrobotixfb/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:Info@asrobotix.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/minirobots" className="text-gray-400 hover:text-white">
                  Atomites
                </Link>
              </li>
              <li>
                <Link href="/mechlid" className="text-gray-400 hover:text-white">
                  Mechlid
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-gray-400 hover:text-white">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-xs leading-6 sm:mt-12 sm:pt-8 sm:text-sm">
          <p>
            © {new Date().getFullYear()} ASRobotix. All rights reserved. | Pioneering the future of collaborative
            robotics.
          </p>
        </div>
      </div>
    </footer>
  )
}
