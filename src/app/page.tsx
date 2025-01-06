import Hero from '@/components/Hero'
import ModernMinimalist from '@/components/ModernMinimalist'
import Stats from '@/components/Stats'
import FeaturedSection from '@/components/FeaturedSection'
import CollectionGrid from '@/components/CollectionGrid'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ModernMinimalist />
      <Stats />
      <FeaturedSection />
      <CollectionGrid />
    </main>
  )
}
