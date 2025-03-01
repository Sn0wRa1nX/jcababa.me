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
              <Image src="/placeholder.svg?height=200&width=200" alt="Profile" fill className="object-cover" />
            </div>

            {/* Name and Title with more spacing */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Johncarlo Ababa</h1>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm inline-block">
                IT | Photographer | General VA
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 flex-grow">
              <Link href="mailto:itsmejesse@jcababa.me" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-pink-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">EMAIL</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
                    jcababa.drccbu@gmail.com
                  </span>
                </div>
              </Link>

              <Link href="tel:+63995526466" className="flex items-center gap-4 group">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-pink-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">PHONE</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
                    +63 995 526 4668
                  </span>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-400 dark:text-purple-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">BIRTHDATE</span>
                  <span className="text-gray-700 dark:text-gray-300">November 18, 2002</span>
                </div>
              </div>

              <Link
                href="https://maps.google.com/?q=Bohol,Philippines"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="bg-zinc-900 dark:bg-white p-3 rounded-lg group-hover:bg-pink-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400 dark:text-purple-500 group-hover:text-pink-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-purple-500 dark:text-purple-400 text-sm">LOCATION</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-pink-500 transition-colors">
                    Bohol, Philippines, Earth
                  </span>
                </div>
              </Link>
            </div>

            {/* Social Links - Fixed at bottom */}
            <div className="flex gap-5 justify-center pt-6 border-t border-zinc-800 mt-8">
              <Link href="#" className="text-purple-400 hover:text-pink-500 transition-colors p-2">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-purple-400 hover:text-pink-500 transition-colors p-2">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-purple-400 hover:text-pink-500 transition-colors p-2">
                <BrandTwitter className="w-5 h-5" />
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
                I'm a Graphic Designer, Photographer, and Virtual Assistant from Bohol, Philippines, with a strong
                background in IT. I specialize in turning complex tasks into streamlined, automated solutions.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Beyond tech, I'm passionate about photography—capturing compelling portraits that tell your story. I
                shoot professionally, creating high-quality images that showcase personality and vision. Check out my
                work on Instagram!
              </p>
              <p className="text-gray-600 dark:text-gray-300">Let's connect and bring your ideas to life.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-purple-400 heading-special">What I'm Doing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full">
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
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full">
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
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 bg-gray-100 dark:bg-black rounded-full">
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
                <div className="flex items-center gap-2 mb-2">
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

