import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-light text-[#2C2825] mb-6">Our Heritage</h1>
            <p className="text-lg text-[#6B635C] mb-8 leading-relaxed">
              Since 1942, Poliform has embodied the essence of Italian craftsmanship. 
              Our journey began in a small workshop and has evolved into a global symbol 
              of luxury furniture design, maintaining our commitment to quality and innovation.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-[#8B7355] flex items-center justify-center">
                    <span className="text-[#F8F7F4]">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-[#2C2825]">Artisanal Excellence</h3>
                  <p className="text-[#6B635C]">Every piece tells a story of masterful craftsmanship</p>
                </div>
              </div>
              {/* Add more feature blocks with consistent styling */}
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/about-showcase.jpg"
              alt="Poliform craftsmanship"
              fill
              className="object-cover rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
