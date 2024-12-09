import { getProducts } from '@/services/product'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Button, buttonVariants } from '../ui/button'
import ProductSkeleton from './ProductSkeleton'

const Products = async () => {
  const products = await getProducts()

  return products.map((p) => (
    <Link href={`/products/${p.id}`} key={p.id} className="flex flex-col gap-2">
      <figure className="relative aspect-square">
        <Image
          fill
          alt={p.title}
          src={p.images[0]}
          draggable={false}
          className="size-full rounded-lg bg-muted"
        />
      </figure>
      <div>
        <h2 className="line-clamp-1 font-semibold text-sm">{p.title}</h2>
        <p className="text-muted-foreground text-sm">${p.price}.00</p>
        <div className="mt-2 flex items-center gap-2">
          <Button size={'sm'} className="w-full flex-1" variant={'outline'}>
            Show Details
          </Button>
        </div>
      </div>
    </Link>
  ))
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
        <Suspense fallback={<ProductSkeleton />}>
          <Products />
        </Suspense>
      </div>
    </div>
  )
}
