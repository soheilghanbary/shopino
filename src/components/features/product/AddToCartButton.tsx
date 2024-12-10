'use client'
import { Button } from '@/components/ui/button'
import useCartStore from '@/contexts/cart'
import { MinusIcon, PlusIcon, ShoppingCart, Trash2Icon } from 'lucide-react'

export default (props: {
  id: number
  title: string
  price: number
  image: string
}) => {
  const { items, updateQuantity, removeItem, addItem } = useCartStore(
    (state) => state
  )
  const cart = items.find((item) => item.id === props.id)
  const handleClick = () => addItem({ ...props, quantity: 1 })
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
