'use client'
import { SpinnerIcon } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import { useProductsByCategory } from '@/hooks/use-product'
import Link from 'next/link'
import ProductSkeleton from '../ProductSkeleton'

export default ({ id, productId }: { id: string; productId: string }) => {
  const { data, isPending } = useProductsByCategory(id)
  if (isPending) {
    return (
      <div className="flex items-center justify-center py-8">
        <SpinnerIcon className="stroke-primary" />
      </div>
    )
  }

  if (!data) return null

  const products = data.filter((product: any) => product.id !== productId)
  return (
    <section className="my-8 space-y-6">
      <h2 className="text-center font-bold text-lg lg:text-2xl">
        More Products
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {isPending ? (
          <ProductSkeleton />
        ) : (
          products.map((p) => (
            <Link
              href={`/products/${p.id}`}
              key={p.id}
              className="flex flex-col gap-2"
            >
              <figure className="relative aspect-square">
                <img
                  alt={p.title}
                  src={p.images[0]}
                  draggable={false}
                  className="size-full rounded-lg bg-muted"
                />
              </figure>
              <div>
                <h2 className="line-clamp-1 font-semibold text-sm">
                  {p.title}
                </h2>
                <p className="text-muted-foreground text-sm">${p.price}.00</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    size={'sm'}
                    className="w-full flex-1"
                    variant={'outline'}
                  >
                    Show Details
                  </Button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}
