'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import useCartStore from '@/contexts/cart'
import { useProduct } from '@/hooks/use-product'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { SpinnerIcon } from '../common/icons'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import ProductSlider from './ProductSlider'

type Props = {
  id: string
}

type BreadcrumbItemProps = {
  title: string
}

const ProductBreadcrumb = ({ title }: BreadcrumbItemProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={'/'}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

const AddToCartButton = (props: {
  id: string
  title: string
  price: number
  image: string
}) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleClick = () => {
    addItem({ ...props, quantity: 1 })
    toast.success('Added to cart')
  }

  return (
    <Button className="w-fit" onClick={handleClick}>
      <ShoppingCart />
      Add to Cart
    </Button>
  )
}

export default ({ id }: Props) => {
  const { data, isPending } = useProduct(id)

  if (isPending) {
    return (
      <div className="flex items-center justify-center py-8">
        <SpinnerIcon className="stroke-primary" />
      </div>
    )
  }

  return (
    <>
      <ProductBreadcrumb title={data.title} />
      <div className="mt-4 flex flex-col items-center gap-6 md:flex-row">
        <ProductSlider images={data.images} />
        <div className="flex flex-1 flex-col gap-4">
          <Link
            href={'/products'}
            className="w-fit rounded-lg bg-muted px-4 py-2 font-medium text-xs"
          >
            {data.category.name}
          </Link>
          <div>
            <h1 className="mb-2 font-black text-2xl/normal lg:text-3xl/normal">
              {data.title}
            </h1>
            <p className="text-foreground/80 text-sm lg:text-base">
              ${data.price}.00
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-bold text-base">Description</h2>
            <p className="text-muted-foreground text-sm/6">
              {data.description}
            </p>
          </div>
          <Separator />
          <AddToCartButton {...data} image={data.images[0]} />
        </div>
      </div>
    </>
  )
}
