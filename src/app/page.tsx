import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/features/FeaturedProducts'

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
