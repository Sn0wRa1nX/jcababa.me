"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, ZoomOut, ShieldAlert } from 'lucide-react'

export default function EmailDesigns() {
  // State for tracking which image is being viewed in the modal
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  // State for zoom level
  const [zoomLevel, setZoomLevel] = useState(1)
  // State for security warning
  const [showSecurityWarning, setShowSecurityWarning] = useState(false)
  // Ref for the container
  const containerRef = useRef<HTMLDivElement>(null)

  // Array of 6 email designs with different images and descriptions
  const emailDesigns = [
    {
      id: 1,
      title: "BMW M4 CSL",
      description: "Product showcase",
      src: "/m4highlight.png?height=7185&width=1200&text=BMW+M4CSL"
    },
    {
      id: 2,
      title: "Abandoned BMW M4",
      description: "Follow-up email",
      src: "/m4abandoned.png?height=5982&width=1200&text=Product+Announcement"
    },
    {
      id: 3,
      title: "Lollipop Brushes",
      description: "Promotional campaign",
      src: "/lollipopbrushes.png?height=6250&width=1200&text=Event+Invitation"
    },
    {
      id: 4,
      title: "Shea Terra",
      description: "Promotional campaign",
      src: "/SheaTerra.png?height=6250&width=1200&text=Welcome+Email"
    },
    {
      id: 5,
      title: "Email Design 5",
      description: "Promotional campaign template",
      src: "/placeholder.svg?height=1600&width=1200&text=Promotional+Campaign"
    },
    {
      id: 6,
      title: "Email Design 6",
      description: "Follow-up email template",
      src: "/placeholder.svg?height=1600&width=1200&text=Follow+Up+Email"
    }
  ]

  // Function to handle zoom in
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  // Function to handle zoom out
  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.1))
  }

  // Function to reset zoom when closing modal
  const handleCloseModal = () => {
    setSelectedImage(null)
    setZoomLevel(1)
  }

  // Enhanced security measures
  useEffect(() => {
    // Show security warning once
    setShowSecurityWarning(true)
    setTimeout(() => setShowSecurityWarning(false), 5000)

    // Prevent keyboard shortcuts for saving images
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+P, Ctrl+Shift+I, PrtScn
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "p")) ||
        (e.ctrlKey && e.shiftKey && e.key === "i") ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault()
        setShowSecurityWarning(true)
        setTimeout(() => setShowSecurityWarning(false), 3000)
        return false
      }
    }

    // Prevent drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Detect screenshot attempts (limited effectiveness)
    const detectScreenshot = () => {
      if (document.hidden) {
        setShowSecurityWarning(true)
        setTimeout(() => setShowSecurityWarning(false), 3000)
      }
    }

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("dragstart", handleDragStart)
    document.addEventListener("visibilitychange", detectScreenshot)

    // Disable browser's native image drag
    const images = document.getElementsByTagName("img")
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("draggable", "false")
    }

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("dragstart", handleDragStart)
      document.removeEventListener("visibilitychange", detectScreenshot)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12" ref={containerRef}>
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-600 heading-special">
        Email Designs
      </h1>
      <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-12"></div>

      {/* Security notice */}
      <div className="mb-8 p-4 bg-pink-500/10 border border-pink-500/20 rounded-lg">
        <p className="text-sm text-center text-foreground">
          These designs are protected by copyright. Unauthorized reproduction, distribution, or use is strictly
          prohibited.
          <br />© {new Date().getFullYear()} Johncarlo Ababa. All rights reserved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emailDesigns.map((design) => (
          <div
            key={design.id}
            className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 cursor-pointer transform hover:scale-[1.02] group"
            onClick={() => setSelectedImage(design.id)}
          >
            <div className="relative aspect-[3/4] overflow-hidden select-none">
              {/* Watermark overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <WatermarkOverlay name="Johncarlo Ababa" />
              </div>

              <div className="relative w-full h-full">
                <Image
                  src={design.src || "/placeholder.svg"}
                  alt={design.title}
                  fill
                  className="object-cover select-none"
                  draggable="false"
                  unoptimized={true} // Prevents Next.js from optimizing and creating additional URLs
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitUserDrag: "none" }}
                  priority={design.id <= 3} // Load the first 3 images with priority
                />
              </div>

              {/* Gradient overlay that shows on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Click to view</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-pink-500 group-hover:scale-105 transition-all duration-300">{design.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{design.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing enlarged images */}
      <AnimatePresence>
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop with fade */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Modal with fade and slight scale */}
            <motion.div
              className="relative w-[95vw] h-[90vh] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Zoom controls */}
              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Zoom out"
                  disabled={zoomLevel <= 0.1}
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Zoom in"
                  disabled={zoomLevel >= 3}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Image container with scroll */}
              <div className="w-full h-full overflow-auto custom-scrollbar select-none">
                <div className="min-h-full flex items-center justify-center">
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: "transform 0.3s ease",
                    }}
                    className="relative"
                  >
                    {/* Watermark overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <WatermarkOverlay name="Johncarlo Ababa" density={2} />
                    </div>

                    {selectedImage && (
                      <Image
                        src={emailDesigns.find((d) => d.id === selectedImage)?.src || ""}
                        alt={`${emailDesigns.find((d) => d.id === selectedImage)?.title}`}
                        width={1200}
                        height={7000}
                        className="object-contain select-none"
                        draggable="false"
                        unoptimized={true}
                        onContextMenu={(e) => e.preventDefault()}
                        style={{ WebkitUserDrag: "none" }}
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Security warning toast */}
      <AnimatePresence>
        {showSecurityWarning && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <ShieldAlert className="w-5 h-5" />
            <span>These designs are protected. Copying is not permitted.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Watermark component that creates a crisscross pattern with the name
function WatermarkOverlay({ name, density = 1 }: { name: string; density?: number }) {
  // Create a grid of watermarks
  const watermarks = []
  const spacing = 150 / density // Adjust spacing based on density

  for (let i = -2; i < 20; i++) {
    for (let j = -2; j < 20; j++) {
      watermarks.push(
        <div
          key={`${i}-${j}`}
          className="absolute text-black dark:text-white text-sm font-light opacity-[0.2] whitespace-nowrap transform -rotate-45"
          style={{
            left: `${i * spacing}px`,
            top: `${j * spacing}px`,
          }}
        >
          {name}
        </div>,
      )
    }
  }

  return <div className="w-full h-full overflow-hidden">{watermarks}</div>
}

