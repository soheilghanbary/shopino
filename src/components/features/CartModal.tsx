'use client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import useCartStore from '@/contexts/cart'
import { MinusIcon, PlusIcon, ShoppingBag, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

export default () => {
  const [open, setOpen] = useState(false)
  const {
    updateQuantity,
    items: carts,
    removeItem,
    total,
  } = useCartStore((state) => state)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button disabled={!carts.length} variant={'outline'} size={'icon'}>
          <ShoppingBag />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carts</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ScrollArea className="h-[410px]">
          {carts.map((cart) => (
            <section key={cart.id} className="border-b py-3">
              <div className="flex items-center gap-4">
                <img
                  src={cart.image}
                  alt="product"
                  className="size-16 rounded-lg object-cover"
                />
                <div>
                  <p className="line-clamp-1 font-medium text-sm/6">
                    {cart.title}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    ${cart.price}.00
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
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
            </section>
          ))}
        </ScrollArea>
        {carts.length ? (
          <div className="mt-4 grid gap-2">
            <p className="font-medium text-foreground/85 text-sm/6">
              Total: ${total}.00
            </p>
            <Button
              asChild
              className="w-full"
              disabled={!carts.length}
              onClick={() => setOpen(false)}
            >
              <Link href="/checkout">Checkout</Link>
            </Button>
          </div>
        ) : (
          <p className="py-8 text-center text-muted-foreground text-sm/6">
            Cart List is empty
          </p>
        )}
      </SheetContent>
    </Sheet>
  )
}
