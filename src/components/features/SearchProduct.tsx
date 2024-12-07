import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'outline'}
          className="gap-4 font-normal text-muted-foreground backdrop-blur-sm"
        >
          <SearchIcon />
          Search any products
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Input type="text" placeholder="search" />
      </DialogContent>
    </Dialog>
  )
}
