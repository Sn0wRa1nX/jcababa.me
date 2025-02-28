"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center heading-special bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
        Do I Wanna Know?
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Johncarlo Ababa</p>
          <p className="mb-2">+639-995-526-4668</p>
          <p className="mb-2">jcababa.drccbu@gmail.com</p>
          <p>Kalaoman Street, Poblacion Talibon, Bohol 6325</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="FULL NAME"
            className="w-full p-2 border border-zinc-700 rounded bg-zinc-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="w-full p-2 border border-zinc-700 rounded bg-zinc-800 text-white"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="COMPANY"
            className="w-full p-2 border border-zinc-700 rounded bg-zinc-800 text-white"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="SUBJECT"
            className="w-full p-2 border border-zinc-700 rounded bg-zinc-800 text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            className="w-full p-2 border border-zinc-700 rounded bg-zinc-800 text-white h-32"
            required
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="recaptcha" className="mr-2" required />
            <label htmlFor="recaptcha" className="text-gray-300">
              I'm not a robot
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors duration-300"
          >
            Commit
          </button>
        </form>
      </div>
    </div>
  )
}

