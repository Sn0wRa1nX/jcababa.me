import Image from "next/image"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 heading-special bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
        Resume
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
            <Image
              src="/jca.png?height=300&width=300"
              alt="Johncarlo Ababa"
              width={300}
              height={300}
              className="rounded-lg mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mt-4 mb-2 heading-special text-purple-400">Who I Am</h2>
            <p className="text-muted-foreground mb-4">
              Passionate about technology and driven by a vision to reset humanity for a better future.
            </p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="inline-block px-4 py-2 bg-pink-500 text-black hover:text-black dark:text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-center font-medium"
              >
                Download Full Resume
              </Link>
              <Link
                href="#"
                className="inline-block px-4 py-2 bg-purple-500 text-black hover:text-black dark:text-white rounded-full hover:bg-purple-600 transition-colors duration-300 text-center font-medium"
              >
                VA Training PH Certificate
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Specialties:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Graphic Design</li>
                <li>Automation</li>
                <li>Photography</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Languages:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>English</li>
                <li>Filipino</li>
                <li>Cebuano</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Software:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Photoshop</li>
                <li>Lightroom</li>
                <li>Canva</li>
                <li>GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Trainings & Certifications:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Virtual Assistant Training (PH) - Specialization: Social Media Management & General VA</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-purple-400">Open-Source Work</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Custom Device Kernel Development (SM-A705 & SM-805)</h3>
              <p className="text-purple-400">Junior Developer, Contributor & Lead Tester (2019-2021)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Custom Device ROM Development (SM-A705 & SM-805)</h3>
              <p className="text-purple-400">Contributor, Builder & Automator; Lead Tester (2019-2021)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Repository Automation Development (SM6150 & SM7150)</h3>
              <p className="text-purple-400">Junior Developer (2019-2021)</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 heading-special text-purple-400">Graphic Design Work</h2>
          <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Photoshop Designing</h3>
              <p className="text-purple-400">Entry Designer (Myink Printing Shop) [2016-2017]</p>
              <p className="text-purple-400">Designer (2017-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Canva Photo Designing (Photography)</h3>
              <p className="text-purple-400">Canva Graphic Designer (2024-2025)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Adobe Lightroom RAW Image Editing (Photography)</h3>
              <p className="text-purple-400">Photo Retoucher (2021-2025)</p>
            </div>
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  )
}

