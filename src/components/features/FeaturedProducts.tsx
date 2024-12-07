'use client'

import { useProducts } from '@/hooks/use-product'
import { ArrowRight, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () => {
  return Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className="flex flex-col gap-2">
      <Skeleton className="aspect-square rounded-lg" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-9 w-full" />
    </div>
  ))
}

export default () => {
  const { data, isPending } = useProducts()

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
      <div className="grid grid-cols-4 gap-6">
        {isPending ? (
          <ProductSkeleton />
        ) : (
          data.map((p) => (
            <Link
              href={`/products/${p.id}`}
              key={p.id}
              className="flex flex-col gap-2"
            >
              <img
                alt={p.title}
                src={p.images[0]}
                className="aspect-square rounded-lg"
              />
              <div>
                <h2 className="line-clamp-1 font-semibold text-sm">
                  {p.title}
                </h2>
                <p className="text-muted-foreground text-sm">${p.price}.00</p>
                <div className="mt-4 flex items-center gap-2">
                  <Button
                    size={'sm'}
                    className="w-full flex-1"
                    variant={'outline'}
                  >
                    Show Details
                  </Button>
                  <Button variant={'secondary'} size={'icon'}>
                    <ShoppingCartIcon />
                  </Button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
