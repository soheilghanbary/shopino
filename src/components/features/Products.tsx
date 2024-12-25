import Link from 'next/link'
import { Skeleton } from '../ui/skeleton'
import ProductImage from './product/ProductImage'

type Props = {
  products: Product[]
}

export const ProductsLoader = () => {
  return Array.from({ length: 10 }).map((_, i) => (
    <div key={i} className="flex flex-col gap-2">
      <Skeleton className="aspect-square rounded-lg" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-3 w-1/3" />
      <Skeleton className="h-8 w-16" />
    </div>
  ))
}

export default ({ products }: Props) =>
  products.map((p) => (
    <Link href={`/products/${p.id}`} key={p.id} className="flex flex-col gap-2">
      <ProductImage alt={p.title} image={p.images[0]} />
      <div>
        <h2 className="line-clamp-1 font-semibold text-sm">{p.title}</h2>
        <p className="text-muted-foreground text-sm">${p.price}.00</p>
        <p className="mt-2 w-fit rounded-md bg-muted/65 p-2 font-medium text-xs shadow-sm">
          {p.category.name}
        </p>
      </div>
    </Link>
  ))
