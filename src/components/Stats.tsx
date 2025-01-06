export default function Stats() {
  const stats = [
    { number: "500+", label: "Modern" },
    { number: "20+", label: "Minimalist" },
    { number: "50+", label: "Projects" },
    { number: "1st", label: "In Quality" },
  ]

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 px-6 md:px-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-3xl font-bold">{stat.number}</h2>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </section>
  )
}
