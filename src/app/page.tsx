import CategoryList from '@/components/features/CategoryList'
import { FeaturesSection } from '@/components/features/FeatureSection'
import FeaturedProducts from '@/components/features/FeaturedProducts'
import Hero from '@/components/features/Hero'
import { ProductsLoader } from '@/components/features/Products'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Hero />
      <section className="container mx-auto p-4">
        <div className="animate-delay-500 animate-fade-up">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-bold text-lg data-[current=12]:text-red-500 lg:text-2xl">
              Featured Products
            </h2>
            <Link
              href={'/products'}
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >
              All Products
              <ArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            <Suspense fallback={<ProductsLoader />}>
              <FeaturedProducts />
            </Suspense>
          </div>
        </div>
        <CategoryList />
        <FeaturesSection />
      </section>
    </>
  )
}
