import FeaturedProducts from '@/components/features/FeaturedProducts'
import Hero from '@/components/features/Hero'

export default function Page() {
  return (
    <>
      <Hero />
      <section className="container p-4">
        <FeaturedProducts />
      </section>
    </>
  )
}
