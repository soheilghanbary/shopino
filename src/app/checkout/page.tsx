'use client'
import CheckoutForm from '@/components/features/CheckoutForm'
import { Button } from '@/components/ui/button'
import useCartStore from '@/contexts/cart'
import { Banknote } from 'lucide-react'

export default function Checkout() {
  const { items, total } = useCartStore((state) => state)
  return (
    <div className="container p-4">
      <h1 className="mb-4 font-bold text-2xl">Checkout Page</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border shadow-sm">
          <CheckoutForm />
        </div>
        <div className="h-fit rounded-lg border shadow-sm">
          <div className="grid gap-4 p-4">
            <h2 className="font-semibold">Order Summary</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm">
              <li>Products: {items.length} items</li>
              <li>Discount: $0.00</li>
              <li>Total: ${total}.00</li>
            </ul>
            <Button className="w-full">
              <Banknote />
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
