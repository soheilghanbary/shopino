import { getProducts } from '@/services/product'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { buttonVariants } from '../ui/button'
import Products, { ProductsLoader } from './Products'

const FeaturedProducts = async () => {
  const products = await getProducts()
  return <Products products={products} />
}

export default () => {
  return (
    <div className="my-4 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold text-lg lg:text-2xl">Featured Products</h2>
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
  )
}
