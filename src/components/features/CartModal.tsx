import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingBag } from 'lucide-react'
import { Button } from '../ui/button'

export default () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'}>
          <ShoppingBag />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart List</SheetTitle>
          <SheetDescription />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
