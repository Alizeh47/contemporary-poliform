'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Interior Design', href: '/services/interior-design' },
      { name: 'Consultation', href: '/services/consultation' },
      { name: 'Planning', href: '/services/planning' },
      { name: 'Custom Furniture', href: '/services/custom-furniture' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Shipping Info', href: '/shipping' },
    ]
  }

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-2">
            Engage with Us in
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400">
            Conversation.
          </h3>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Poliform
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Poliform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
