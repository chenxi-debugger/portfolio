'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Contact
        <div className="h-1 w-8 bg-cyan-400 mt-2 rounded"></div>
      </h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-12">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.588731915584!2d-121.96237532419906!3d37.354107737909665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9cd88b37cd9%3A0xadc8682eb236f538!2sSanta%20Clara%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1690747570481!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px]"
        ></iframe>
      </div>

      <h2 className="text-xl font-semibold mb-6">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-[#0f172a] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-[#0f172a] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full p-4 bg-[#0f172a] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {status === 'success' && <p className="text-green-400">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-400">Something went wrong.</p>}
      </form>
    </div>
  )
}
