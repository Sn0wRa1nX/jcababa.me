"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Update the ProjectModal interface to include the new button properties
interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    title: string
    category: string
    description: string
    fullDescription?: string
    image: string
    secimage: string
    thirdimage: string
    fourthimage: string
    fifthimage: string
    sixthimage: string
    seventhimage: string
    eighthimage: string
    ninthimage: string
    tenthimage: string
    year: string
    link: string
    code: string
    technologies?: string[]
    gallery?: string[]
    firstbutton?: string
    secbutton?: string
    thirdbutton?: string
    fourthbutton?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with fade */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal with fade and slight scale */}
          <motion.div
            className="relative w-[95vw] max-w-5xl max-h-[90vh] bg-background rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button - positioned outside the scrollable area */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content - scrollable */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Header */}
              <div className="p-6 pb-0">
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </div>

              {/* Main project image */}
              <div className="relative h-[300px] md:h-[400px] p-6">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=1200"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      {project.year}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 p-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>

                  {/* Device model based on project ID */}
                  {project.id <= 2 && <p className="text-base font-medium mb-4">SM-A705 & SM-805</p>}
                  {project.id === 3 && <p className="text-base font-medium mb-4">SM6150 & SM7150</p>}

                  {/* Project description - First paragraph */}
                  <div className="text-muted-foreground whitespace-pre-line text-sm md:text-base mb-8">
                    {project.id === 1
                      ? "This project involves the development of a custom kernel designed to optimize performance, enhance battery life, and provide a smoother, more responsive experience for Samsung Galaxy A70 and A80 users. Key improvements include refined CPU and GPU management, better memory allocation, and optimized power efficiency, all contributing to a faster and more stable device. Additionally, security patches and system enhancements have been integrated to ensure reliability while maintaining compatibility with various custom ROMs. The goal is to offer users a highly efficient and customizable Android experience tailored to their specific needs."
                      : project.id === 2
                        ? "In this project, I developed custom Android ROMs for the Samsung Galaxy A70 and A80, focusing on minimalism and performance optimization. Leveraging the Android Open Source Project (AOSP), I built versions of LineageOS and crDroid that provide a streamlined, efficient, and responsive user experience. These custom ROMs replace the stock OneUI, which is often criticized for being bloated and slow, with a cleaner interface that enhances device performance."
                        : project.id === 3
                          ? "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
                          : project.id === 4
                            ? "I specialize in crafting high-quality email designs using Figma, Canva, and Photoshop, blending modern aesthetics with functionality. My approach is driven by a minimalistic and futuristic design philosophy, influenced by Material UI principles to create clean, engaging, and visually appealing layouts."
                            : project.id === 5
                              ? "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
                              : project.id === 6
                                ? "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
                                : project.fullDescription || project.description}
                  </div>

                  {/* Second image - Only display if secimage exists */}
                  {project.secimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.secimage || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                        <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                            {project.year}
                          </span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center gap-1 text-white">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Third image - Only display if thirdimage exists */}
                  {project.thirdimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.thirdimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 1`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Fourth image - Only display if fourthimage exists */}
                  {project.fourthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.fourthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 2`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Fifth image - Only display if fifthimage exists */}
                  {project.fifthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.fifthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 3`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Sixth image - Only display if sixthimage exists */}
                  {project.sixthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.sixthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 4`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Seventh image - Only display if seventhimage exists */}
                  {project.seventhimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.seventhimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 5`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Eighth image - Only display if eighthimage exists */}
                  {project.eighthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.eighthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 6`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Ninth image - Only display if ninthimage exists */}
                  {project.ninthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.ninthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 7`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tenth image - Only display if tenthimage exists */}
                  {project.tenthimage && (
                    <div className="mt-8 mb-8">
                      <div
                        className="relative aspect-auto w-full rounded-lg overflow-hidden"
                        style={{ height: "auto", minHeight: "300px", maxHeight: "600px" }}
                      >
                        <Image
                          src={project.tenthimage || "/placeholder.svg"}
                          alt={`${project.title} - Additional view 8`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Additional paragraphs - Same text repeated */}
                  <div className="space-y-6">
                    <p className="text-sm md:text-base text-muted-foreground">
                      {project.id === 1
                        ? "The Fire Kernel for the Samsung Galaxy A70 and A80 significantly enhances overall device efficiency by improving processing power, optimizing battery consumption, and refining system responsiveness. It features upgraded CPU and GPU performance, streamlined memory management, improved security measures, and extended compatibility with custom ROMs. The combination of these enhancements ensures a well-balanced and high-performing Android experience."
                        : project.id === 2
                          ? "To further enhance performance and efficiency, I integrated my custom-built Ice Kernel (formerly known as Fire Kernel) into these ROMs. This kernel is specifically designed to optimize CPU and GPU operations, improve memory management, and extend battery life. The combination of the Ice Kernel with the minimalist design of the custom ROMs results in a significantly more efficient and responsive device."
                          : project.id === 3
                            ? "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
                            : project.id === 4
                              ? "With expertise in photo enhancement and manipulation, I ensure that every design maintains a polished, professional look that captivates and resonates with its audience."
                              : project.id === 5
                                ? "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
                                : project.id === 6
                                  ? "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
                                  : project.fullDescription || project.description}
                    </p>

                    <p className="text-sm md:text-base text-muted-foreground">
                      {project.id === 1
                        ? "Later on, it was rebranded into Ice Kernel which surpasses the speed and stability of Fire Kernel. It clocked 10% faster from any benchmarking apps and faster boot times than Fire Kernel. It still retain some superb security patches from CAF Sources while reducing unnecessary processes to make the device run cooler and peaceful."
                        : project.id === 2
                          ? " Overall, this project delivers a lightweight, high-performance alternative to the stock firmware, enhancing the user experience on Samsung Galaxy A70 and A80 devices."
                          : project.id === 3
                            ? "This repository automation project streamlines the development workflow for SM6150 & SM7150 device platforms by implementing CI/CD pipelines, automated build processes, and quality assurance checks. The system automatically handles code compilation, testing, and deployment, significantly reducing manual intervention and human error. Key features include scheduled builds, dependency management, error reporting, and integration with version control systems, allowing developers to focus on code quality rather than repetitive build tasks."
                            : project.id === 4
                              ? ""
                              : project.id === 5
                                ? "This Canva photo design project focuses on creating visually appealing graphics and layouts for social media, presentations, and marketing materials. Leveraging Canva's intuitive interface and extensive template library, the project delivers professional-looking designs that maintain brand consistency while effectively communicating key messages. The work demonstrates skills in typography, color theory, layout design, and visual storytelling."
                                : project.id === 6
                                  ? "This Adobe Lightroom RAW image editing project involves the professional processing and enhancement of high-quality photographs. Working with RAW image files to preserve maximum detail and quality, the project demonstrates advanced skills in color grading, exposure adjustment, selective editing, and batch processing. The editing workflow is designed to maintain natural-looking results while enhancing the visual impact of each image, with particular attention to color accuracy, detail preservation, and artistic expression."
                                  : project.fullDescription || project.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="bg-muted p-4 rounded-lg sticky top-4">
                    <h3 className="font-semibold mb-4">Project Details</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">YEAR</h4>
                        <p>{project.year}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">CATEGORY</h4>
                        <p className="capitalize">{project.category}</p>
                      </div>

                      {project.technologies && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">TECHNOLOGIES</h4>
                          <ul className="list-disc list-inside">
                            {project.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Replace the buttons section in the component with centered, conditional buttons */}
                    <div className="mt-6 space-y-3 flex flex-col items-center">
                      {project.firstbutton && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.firstbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.secbutton && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.secbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.thirdbutton && (
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.thirdbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {project.fourthbutton && (
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[250px] inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 group"
                        >
                          <span className="group-hover:text-black transition-colors duration-200">
                            {project.fourthbutton}
                          </span>
                          <svg
                            className="w-4 h-4 ml-2 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

