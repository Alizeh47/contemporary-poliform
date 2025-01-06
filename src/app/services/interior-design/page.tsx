import Image from 'next/image'

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-light text-[#2C2825] mb-6">Interior Design Services</h1>
            <p className="text-lg text-[#6B635C] mb-8 leading-relaxed">
              Transform your space with our expert interior design services. 
              We combine Italian craftsmanship with contemporary design principles 
              to create spaces that reflect your unique style.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-[#8B7355] flex items-center justify-center">
                    <span className="text-[#F8F7F4]">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-[#2C2825]">Personalized Consultation</h3>
                  <p className="text-[#6B635C]">Tailored design solutions for your space</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/interior-design.jpg"
              alt="Interior Design Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
