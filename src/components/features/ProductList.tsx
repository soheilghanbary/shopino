'use client'
import { useInfiniteProducts } from '@/hooks/use-product'
import { Fragment, useEffect, useRef } from 'react'
import Products, { ProductsLoader } from './Products'
import { useQueryState } from 'nuqs'

export default () => {
  const [query] = useQueryState('category')
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  } = useInfiniteProducts(query!)

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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isPending ? (
          <ProductsLoader />
        ) : (
          data?.pages.map((products, index) => (
            <Fragment key={index}>
              <Products products={products} />
            </Fragment>
          ))
        )}
        {isFetching && <ProductsLoader />}
      </div>
      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  )
}
