import Link from 'next/link'
import { Suspense } from 'react'
import { Store01Icon } from '../common/icons'
import { ModeToggle } from '../common/mode-toggle'
import CartModal from '../features/CartModal'
import SearchProduct from '../features/SearchProduct'

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 font-bold text-primary">
      <Store01Icon className="text-primary" />
      Shopino
    </Link>
  )
}

export default () => {
  return (
    <header className="sticky top-0 z-10 border-separate border-b bg-background/80 backdrop-blur-sm">
      <nav className="container flex items-center justify-between gap-2 px-4 py-2">
        <Logo />
        <div className="flex-1" />
        <Suspense>
          <SearchProduct />
        </Suspense>
        <CartModal />
        <ModeToggle />
      </nav>
    </header>
  )
}
