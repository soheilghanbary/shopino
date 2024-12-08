'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useSearchProducts } from '@/hooks/use-product'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Skeleton } from '../ui/skeleton'

const ProductSkeleton = () =>
  Array.from({ length: 3 }, (_, i) => i).map((i) => (
    <div key={i} className="flex items-center gap-4 border-b py-2">
      <Skeleton className="size-16 rounded-lg" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  ))

export default () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useQueryState('filter', { defaultValue: '' })
  const { mutateAsync, isPending, data } = useSearchProducts(query)
  const debounced = useDebouncedCallback(async (value) => {
    setQuery(value)
    await mutateAsync(value)
  }, 500)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="gap-4 font-normal text-muted-foreground backdrop-blur-sm"
        >
          <SearchIcon />
          Search any products
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Input
          type="text"
          placeholder="search"
          defaultValue={query}
          onChange={(e) => debounced(e.target.value)}
        />
        {isPending && (
          <div className="h-60">
            <ProductSkeleton />
          </div>
        )}
        <ScrollArea className={data ? 'h-60' : 'h-0'}>
          {data?.map((product: any) => (
            <Link
              key={product.id}
              className="flex items-center gap-4 border-b py-2"
              onClick={() => setOpen(false)}
              href={`/products/${product.id}`}
            >
              <img
                src={product.images[0]}
                alt="product"
                className="size-16 rounded-lg object-cover"
              />
              <div>
                <p className="line-clamp-1 font-medium text-sm/6">
                  {product.title}
                </p>
                <p className="text-muted-foreground text-xs">
                  ${product.price}.00
                </p>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
