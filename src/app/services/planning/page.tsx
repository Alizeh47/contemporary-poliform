import Image from 'next/image'

export default function PlanningPage() {
  const planningSteps = [
    {
      title: "Initial Concept",
      description: "Development of preliminary design concepts and space planning",
      duration: "2-3 weeks"
    },
    {
      title: "Detailed Design",
      description: "Creation of detailed floor plans and material selections",
      duration: "3-4 weeks"
    },
    {
      title: "Final Implementation",
      description: "Execution of the design plan and installation",
      duration: "4-6 weeks"
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-6">Design Planning</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            Comprehensive planning services to bring your vision to life, from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {planningSteps.map((step, index) => (
            <div key={index} className="bg-white border border-[#D4C4B5] p-8">
              <div className="text-[#8B7355] text-lg font-medium mb-2">{step.title}</div>
              <p className="text-[#6B635C] mb-4">{step.description}</p>
              <div className="text-sm text-[#2C2825]">Duration: {step.duration}</div>
            </div>
          ))}
        </div>

        <div className="relative h-[400px] mb-16">
          <Image
            src="/images/planning.jpg"
            alt="Design Planning Process"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
