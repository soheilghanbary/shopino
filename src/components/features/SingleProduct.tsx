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
import { useProduct, useProductsByCategory } from '@/hooks/use-product'
import { MinusIcon, PlusIcon, ShoppingCart, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { SpinnerIcon } from '../common/icons'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import ProductSkeleton from './ProductSkeleton'
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
  const { items, updateQuantity, removeItem, addItem } = useCartStore(
    (state) => state
  )

  const cart = items.find((item) => item.id === props.id)

  const handleClick = () => {
    addItem({ ...props, quantity: 1 })
    toast.success('Added to cart')
  }

  return cart ? (
    <div className="flex items-center gap-4">
      {cart.quantity > 1 ? (
        <Button
          size={'icon'}
          variant={'outline'}
          className="text-rose-500"
          onClick={() => updateQuantity(cart.id, cart.quantity - 1)}
        >
          <MinusIcon />
        </Button>
      ) : (
        <Button
          size={'icon'}
          variant={'outline'}
          className="text-rose-500"
          onClick={() => removeItem(cart.id)}
        >
          <Trash2Icon />
        </Button>
      )}
      <span className="shrink-0 text-sm">{cart.quantity}</span>
      <Button
        size={'icon'}
        variant={'outline'}
        className="text-emerald-500"
        onClick={() => updateQuantity(cart.id, cart.quantity + 1)}
      >
        <PlusIcon />
      </Button>
    </div>
  ) : (
    <Button className="w-fit" onClick={handleClick}>
      <ShoppingCart />
      Added
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
      <ProductsByCategory id={data.category.id} productId={data.id} />
    </>
  )
}

const ProductsByCategory = ({
  id,
  productId,
}: { id: string; productId: string }) => {
  const { data, isPending } = useProductsByCategory(id)
  if (isPending) {
    return (
      <div className="flex items-center justify-center py-8">
        <SpinnerIcon className="stroke-primary" />
      </div>
    )
  }
  const products = data.filter((product: any) => product.id !== productId)
  return (
    <section className="my-8 space-y-6">
      <h2 className="text-center font-bold text-lg lg:text-2xl">
        More Products
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isPending ? (
          <ProductSkeleton />
        ) : (
          products.map((p) => (
            <Link
              href={`/products/${p.id}`}
              key={p.id}
              className="flex flex-col gap-2"
            >
              <img
                alt={p.title}
                src={p.images[0]}
                className="aspect-square rounded-lg bg-muted"
              />
              <div>
                <h2 className="line-clamp-1 font-semibold text-sm">
                  {p.title}
                </h2>
                <p className="text-muted-foreground text-sm">${p.price}.00</p>
                <Button size={'sm'} className="mt-4 w-full" variant={'outline'}>
                  Show Details
                </Button>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}
