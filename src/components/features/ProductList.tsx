'use client'
import { useInfiniteProducts } from '@/hooks/use-product'
import { Fragment, useEffect, useRef } from 'react'
import ProductSkeleton from './ProductSkeleton'
import Products from './Products'

export default () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useInfiniteProducts()

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
          data?.pages.map((products, index) => (
            <Fragment key={index}>
              <Products products={products} />
            </Fragment>
          ))
        )}
        {isFetchingNextPage && <ProductSkeleton />}
      </div>
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  )
}
