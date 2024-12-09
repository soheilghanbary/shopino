import FeaturedProducts from '@/components/features/FeaturedProducts'
import Hero from '@/components/features/Hero'
import MadeBy from '@/components/features/MadeBy'

export default function Page() {
  return (
    <>
      <Hero />
      <section className="container p-4">
        <FeaturedProducts />
        <MadeBy />
      </section>
    </>
  )
}
