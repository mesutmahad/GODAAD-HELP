"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DonateButton } from "@/components/donate-button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden">
          <div className="flex flex-col space-y-6">
            <Link href="/about-us" className="font-medium" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/get-support" className="font-medium" onClick={() => setIsOpen(false)}>
              Get Support
            </Link>
            <Link href="/get-involved" className="font-medium" onClick={() => setIsOpen(false)}>
              Get Involved
            </Link>
            <Link href="/news-and-events" className="font-medium" onClick={() => setIsOpen(false)}>
              News & Events
            </Link>
            <form className="relative w-full">
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </form>
            <DonateButton className="w-full" />
          </div>
        </div>
      )}
    </div>
  )
}

