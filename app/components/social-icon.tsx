"use client"

import type React from "react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SocialIconProps {
  href: string
  label: string
  children: React.ReactNode
}

export function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <a href={href} className="group" draggable="false">
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium px-3 py-1.5"
        >
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

