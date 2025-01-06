'use client'
import { motion } from 'framer-motion'
import CircularText from './CircularText'

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#F5EFE6]">
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-interior.jpg"
          alt="Contemporary Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-gray-200 mb-8"
        >
          Contemporary
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-xl"
        >
          <p className="text-white/90 text-lg mb-4">
            Crafting spaces that harmonize modern aesthetics with timeless elegance, 
            our contemporary interior designs breathe life into every room, redefining 
            the essence of chic living.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
            View More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </motion.div>

        <CircularText />
      </div>
    </section>
  )
}
