import Link from 'next/link'
import { Button } from '../ui/button'
import ProductImage from './product/ProductImage'

type Props = {
  products: Product[]
}
export default ({ products }: Props) =>
  products.map((p) => (
    <Link href={`/products/${p.id}`} key={p.id} className="flex flex-col gap-2">
      <ProductImage alt={p.title} image={p.images[0]} />
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
