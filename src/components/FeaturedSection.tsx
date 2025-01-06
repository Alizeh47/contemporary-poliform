export default function FeaturedSection() {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Modern Style Section */}
        <div className="relative h-[400px] group cursor-pointer">
          <img
            src="/images/featured/modern-style.jpg"
            alt="Modern Style"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg">
            <div className="flex flex-col justify-end h-full p-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                Modern Style
              </h3>
              <p className="text-white/90 mb-4">
                Timeless Charm
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Design Section */}
        <div className="relative h-[400px] group cursor-pointer">
          <img
            src="/images/featured/minimalist-design.jpg"
            alt="Minimalist Design"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg">
            <div className="flex flex-col justify-end h-full p-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                Minimalist Design
              </h3>
              <p className="text-white/90 mb-4">
                Less is More
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition-colors">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
