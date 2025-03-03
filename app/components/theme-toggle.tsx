"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-gray-200 transition-all duration-100 hover:scale-110 relative w-9 h-9 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:bg-gradient-to-r dark:from-purple-500 dark:to-violet-500 dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-500 dark:to-violet-500" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

