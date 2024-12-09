import ProductSlider from '@/components/features/ProductSlider'
import AddToCartButton from '@/components/features/product/AddToCartButton'
import { ProductBreadcrumb } from '@/components/features/product/ProductBreadcrumb'
import ProductsByCategory from '@/components/features/product/ProductsByCategory'
import { Separator } from '@/components/ui/separator'
import { getProduct } from '@/services/product'
import Link from 'next/link'

export const metadata = {
  title: 'Product',
}

export default async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const product = await getProduct(id)
  return (
    <section className="container mx-auto p-4">
      <ProductBreadcrumb title={product.title} />
      <div className="mt-4 flex flex-col items-center gap-6 md:flex-row">
        <ProductSlider images={product.images} />
        <div className="flex flex-1 flex-col gap-4">
          <Link
            href={'/products'}
            className="w-fit rounded-lg bg-muted px-4 py-2 font-medium text-xs"
          >
            {product.category.name}
          </Link>
          <div>
            <h1 className="mb-2 font-black text-2xl/normal lg:text-3xl/normal">
              {product.title}
            </h1>
            <p className="text-foreground/80 text-sm lg:text-base">
              ${product.price}.00
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold text-base">Description</h2>
            <p className="text-muted-foreground text-sm/6">
              {product.description}
            </p>
          </div>
          <Separator />
          <AddToCartButton {...product} image={product.images[0]} />
        </div>
      </div>
      <ProductsByCategory id={product.category.id} productId={id} />
    </section>
  )
}
