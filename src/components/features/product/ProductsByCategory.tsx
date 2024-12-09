import { Button } from '@/components/ui/button'
import { getProductsByCategory } from '@/services/category'
import Link from 'next/link'
import ProductImage from './ProductImage'

type Props = {
  id: string
  productId: string
}

export default async ({ id, productId }: Props) => {
  const data = await getProductsByCategory(id)
  const products = data.filter((product) => product.id !== Number(productId))

  return products.map((p) => (
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
}
