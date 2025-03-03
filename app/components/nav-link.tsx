"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-100",
        isActive ? "text-pink-500 font-bold hover:text-purple-600" : "text-foreground hover:text-pink-500 font-normal",
      )}
    >
      {children}
    </Link>
  )
}

