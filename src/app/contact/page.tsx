'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Visit Our Showroom</h3>
              <p className="text-gray-600">
                123 Design District<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p className="text-gray-600">
                Phone: (555) 123-4567<br />
                Email: info@poliform.com<br />
                Hours: Mon-Fri 9AM-6PM
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-[#D4C4B5] p-8">
            <input
              type="text"
              className="w-full px-4 py-3 border border-[#D4C4B5] focus:ring-1 focus:ring-[#8B7355] focus:border-[#8B7355] transition-colors"
            />
            <button
              type="submit"
              className="mt-6 w-full bg-[#8B7355] text-white py-3 px-6 hover:bg-[#4A4139] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
