'use client'
import { useInfiniteProducts } from '@/hooks/use-product'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
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
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isPending,
  } = useInfiniteProducts()

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [hasNextPage, fetchNextPage])

  return (
    <div className="my-4 space-y-4">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isPending ? (
          <ProductSkeleton />
        ) : (
          data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="flex flex-col gap-2"
                >
                  <img
                    alt={p.title}
                    src={p.images[0]}
                    draggable={false}
                    className="aspect-square rounded-lg"
                  />
                  <div>
                    <h2 className="line-clamp-1 font-semibold text-sm">
                      {p.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      ${p.price}.00
                    </p>
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
              ))}
            </Fragment>
          ))
        )}
      </div>
      {isFetchingNextPage && <p>Loading more...</p>}
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  )
}
