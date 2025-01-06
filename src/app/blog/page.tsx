import Image from 'next/image'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Art of Modern Furniture Design',
      excerpt: 'Exploring the principles that guide contemporary furniture design...',
      author: 'Maria Stevens',
      date: 'Jan 15, 2024',
      category: 'Design',
      image: '/images/blog-1.jpg',
    },
    // Add more blog posts
  ]

  return (
    <div className="min-h-screen bg-[#E3D8B7]">
      <div className="pt-[100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-[#2C2825] mb-4">Our Blog</h1>
          <p className="text-lg text-[#6B635C]">
            Insights, news, and stories from the world of luxury furniture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white border border-[#D4C4B5]">
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-[#6B635C] mb-2">
                  <span className="text-[#8B7355]">{post.category}</span>
                  <span className="mx-2">·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-medium text-[#2C2825] mb-2">{post.title}</h2>
                <p className="text-[#6B635C] mb-6">{post.excerpt}</p>
                <div className="flex items-center pt-6 border-t border-[#D4C4B5]">
                  <div className="h-10 w-10 rounded-full bg-[#D4C4B5]"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#2C2825]">{post.author}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
