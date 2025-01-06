'use client'
import { motion } from 'framer-motion'

interface Stat {
  number: string | number;
  label: string;
}

export default function ModernMinimalist() {
  const stats: Stat[] = [
    { number: '100+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '10+', label: 'Awards' },
    { number: '15+', label: 'Years' },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Left Column - Title and Image */}
        <motion.div className="space-y-8">
          <h2 className="text-3xl font-bold">Modern<br />Minimalist</h2>
          <div className="aspect-[1/1] relative max-w-3xl">
            <img
              src="/images/modern-minimalist.jpg"
              alt="Modern Minimalist Interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Column - Stats and Second Image */}
        <motion.div className="space-y-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-bold">{stat.number}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Secondary Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="/images/minimalist-interior.jpg"
              alt="Minimalist Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Design Quote Section - Compact and aligned */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 relative bg-gray-300 p-6 rounded-sm"
          >
            <div className="text-center space-y-3">
              {/* Design Philosophy - More compact */}
              <div className="space-y-2">
                <h3 className="text-lg uppercase tracking-wider text-black-500">
                  Design Philosophy
                </h3>
                <p className="text-2xl font-light text-black-800">
                  Modern aesthetics meet functional design
                </p>
              </div>

              {/* Design Stats - Compact Layout */}
              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-200">
                <div>
                  <p className="text-xl font-medium text-gray-900">15+</p>
                  <p className="text-xs text-gray-500">Years</p>
                </div>
                <div>
                  <p className="text-xl font-medium text-gray-900">200+</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div>
                  <p className="text-xl font-medium text-gray-900">98%</p>
                  <p className="text-xs text-gray-500">Satisfied</p>
                </div>
              </div>
            </div>

            {/* Smaller Decorative Elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-gray-200" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-gray-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
