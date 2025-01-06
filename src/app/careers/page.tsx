export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Senior Interior Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
    },
    {
      title: 'Furniture Craftsperson',
      department: 'Production',
      location: 'Milan',
      type: 'Full-time',
    },
    // Add more job openings as needed
  ]

  return (
    <div className="min-h-screen bg-[#E3D8B7]">
      <div className="pt-[100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Join Our Team</h1>
          <p className="text-lg text-[#6B635C] max-w-2xl mx-auto">
            Be part of a team that's reshaping the future of luxury furniture design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-[#D4C4B5]">
            <div className="w-12 h-12 bg-[#8B7355] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#F8F7F4]">✓</span>
            </div>
            <h3 className="text-xl font-medium text-[#2C2825] mb-2">Growth Opportunities</h3>
            <p className="text-[#6B635C]">Continuous learning and career development programs</p>
          </div>
          {/* Add similar styled cards for other benefits */}
        </div>

        <div className="bg-white border border-[#D4C4B5]">
          <div className="px-8 py-6 border-b border-[#D4C4B5]">
            <h2 className="text-2xl font-light text-[#2C2825]">Open Positions</h2>
          </div>
          <div className="divide-y divide-[#D4C4B5]">
            {jobOpenings.map((job, index) => (
              <div key={index} className="p-8 hover:bg-[#F8F7F4] transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-[#2C2825] mb-2">{job.title}</h3>
                    <p className="text-[#6B635C]">{job.department} · {job.location}</p>
                  </div>
                  <span className="px-4 py-1 border border-[#8B7355] text-[#8B7355] text-sm">
                    {job.type}
                  </span>
                </div>
                <button className="mt-4 text-[#8B7355] font-medium hover:text-[#4A4139] transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
