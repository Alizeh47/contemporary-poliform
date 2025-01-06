import Image from 'next/image'

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-light text-[#2C2825] mb-6">Design Consultation</h1>
            <p className="text-lg text-[#6B635C] mb-8 leading-relaxed">
              Begin your journey to a beautifully designed space with our expert consultation services.
              Our team of experienced designers will guide you through every step of the process.
            </p>
            <div className="bg-white border border-[#D4C4B5] p-8 mb-8">
              <h3 className="text-xl font-medium text-[#2C2825] mb-4">What to Expect</h3>
              <ul className="space-y-4 text-[#6B635C]">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#8B7355] rounded-full mr-3"></span>
                  Initial space assessment
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#8B7355] rounded-full mr-3"></span>
                  Style preference discussion
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#8B7355] rounded-full mr-3"></span>
                  Budget planning
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/images/consultation.jpg"
              alt="Design Consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
