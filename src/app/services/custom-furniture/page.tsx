import Image from 'next/image'

export default function CustomFurniturePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-light text-[#2C2825] mb-6">Custom Furniture</h1>
            <p className="text-lg text-[#6B635C] mb-8 leading-relaxed">
              Experience the luxury of bespoke furniture, handcrafted to your exact specifications.
              Each piece is a unique creation that perfectly matches your style and space.
            </p>
            
            <div className="bg-white border border-[#D4C4B5] p-8">
              <h3 className="text-xl font-medium text-[#2C2825] mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#8B7355] flex items-center justify-center text-white mr-4">1</div>
                  <span className="text-[#6B635C]">Design Consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#8B7355] flex items-center justify-center text-white mr-4">2</div>
                  <span className="text-[#6B635C]">Material Selection</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#8B7355] flex items-center justify-center text-white mr-4">3</div>
                  <span className="text-[#6B635C]">Crafting & Quality Control</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#8B7355] flex items-center justify-center text-white mr-4">4</div>
                  <span className="text-[#6B635C]">Delivery & Installation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/custom-furniture.jpg"
              alt="Custom Furniture Crafting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
