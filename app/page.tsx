import Link from "next/link"
import { Mail, Phone, Calendar, MapPin, Facebook, Instagram, TwitterIcon as BrandTwitter } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="flex flex-col">
          {/* Info Card with Profile Image */}
          <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-zinc-800">
            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-purple-500/20">
              <Image src="/jc.png?height=200&width=200" alt="Profile" fill className="object-cover" />
            </div>

            {/* Name and Title with more spacing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Johncarlo Ababa</h1>
                <div className="ml-1.5 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49302 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.984C21.715 15.298 22.5 13.994 22.5 12.5Z"
                      fill="#1D9BF0"
                    />
                    <path
                      d="M11.302 15.1991L8.90202 12.7991C8.51202 12.4091 8.51202 11.7791 8.90202 11.3891C9.29202 10.9991 9.92202 10.9991 10.312 11.3891L11.998 13.0751L16.688 8.38506C17.078 7.99506 17.708 7.99506 18.098 8.38506C18.488 8.77506 18.488 9.40506 18.098 9.79506L12.688 15.2051C12.298 15.5951 11.702 15.5951 11.312 15.2051L11.302 15.1991Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-sm inline-block transition-transform duration-100 hover:scale-110 drop-shadow-[0_2px_8px_rgba(236,72,153,0.5)] hover:drop-shadow-[0_4px_12px_rgba(168,85,247,0.5)]">
                <span className="text-black font-medium">IT | Photographer | General VA</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 flex-grow">
              <Link href="mailto:itsmejesse@jcababa.me" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-200 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-200" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">EMAIL</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-200">
                    itsmejesse@jcababa.me
                  </span>
                </div>
              </Link>

              <Link href="https://wa.me/639955264668" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">PHONE</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    +63 995 526 4668
                  </span>
                </div>
              </Link>

              <Link
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Johncarlo's+Birthday&dates=20241118/20241119&recur=RRULE:FREQ=YEARLY"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <Calendar className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">BIRTHDATE</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    November 18, 2002
                  </span>
                </div>
              </Link>

              <Link
                href="https://maps.google.com/?q=Bohol,Philippines"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-transparent transition-all duration-150 group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-600 dark:group-hover:text-pink-600 transition-colors duration-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">LOCATION</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors duration-100">
                    Bohol, Philippines, Earth
                  </span>
                </div>
              </Link>
            </div>

            {/* Social Links - Fixed at bottom */}
            <div className="flex gap-5 justify-center pt-6 border-t border-zinc-800 mt-8">
              <Link href="https://www.facebook.com/firemax13" className="group">
                <Facebook className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110" />
              </Link>
              <Link href="https://www.instagram.com/jacoboi13/" className="group">
                <Instagram className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110" />
              </Link>
              <Link href="https://t.me/itsmejesseme" className="group">
                <svg
                  className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
              <Link href="#" className="group">
                <BrandTwitter className="w-6 h-6 text-purple-400 transition-all duration-200 group-hover:text-black dark:group-hover:text-white group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>

        {/* About and Skills Section */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400 heading-special">About Me</h2>
            <div className="bg-white dark:bg-zinc-900/50 rounded-lg shadow-md p-6 border border-gray-200 dark:border-zinc-800">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a Versatile IT Technician, Professional Photographer, and Certified Virtual Assistant with 3 years
                of expertise in custom kernel and ROM development for Samsung devices. I also specialize in turning
                complex tasks into streamlined, automated solutions.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Beyond tech, I'm passionate about photography—capturing compelling portraits that tell your story. Check
                out my work on Instagram!
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Just me who is skilled in technology solutions, visual storytelling, and virtual operations, with a
                passion for innovation and problem-solving.
              </p>
              <p className="text-gray-600 dark:text-gray-300">So let's connect and bring your ideas to life.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-pink-400 heading-special">What I'm Doing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Data Scraping</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Professional social media data extraction.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Photographer</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Capturing high-quality photos across various categories at a professional level.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full transition-all duration-200 hover:scale-110">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Automation</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Converting time-consuming tasks into efficient, automated processes.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2 transition-all duration-200 hover:scale-110">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full">
                    <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Virtual Assistant</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Providing support for a wide range of tasks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
