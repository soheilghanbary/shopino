import ProductList from '@/components/features/ProductList'
import { Suspense } from 'react'

export const metadata = {
  title: 'Products Page',
}

export default () => {
  return (
    <section className="container mx-auto animate-delay-100 animate-fade-up p-4">
      <h1 className="font-bold text-xl md:font-black md:text-2xl">
        All Products
      </h1>
      <Suspense>
        <ProductList />
      </Suspense>
    </section>
  )
}
