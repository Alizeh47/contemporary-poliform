'use client'
import { motion } from 'framer-motion'

export default function CollectionGrid() {
  const collections = [
    {
      title: "Living Room",
      image: "/images/collections/living-room.jpg",
      size: "large" // First image is larger
    },
    {
      title: "Dining",
      image: "/images/collections/dining.jpg",
      size: "small"
    },
    {
      title: "Office",
      image: "/images/collections/office.jpg",
      size: "small"
    },
    {
      title: "Bedroom",
      image: "/images/collections/bedroom.jpg",
      size: "small"
    },
    {
      title: "Kitchen",
      image: "/images/collections/kitchen.jpg",
      size: "small"
    },
    {
      title: "Outdoor",
      image: "/images/collections/outdoor.jpg",
      size: "small"
    }
  ]

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Title Section */}
      <div className="flex flex-col mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-medium"
        >
          Explore Our Proudly
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-500"
        >
          Collection
        </motion.h3>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {collections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-lg md:text-xl font-medium">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
