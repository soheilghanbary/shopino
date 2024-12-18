import { getCategories } from '@/services/category'
import Link from 'next/link'
import { Suspense } from 'react'
import { Store01Icon } from '../common/icons'
import { ModeToggle } from '../common/mode-toggle'
import CartModal from '../features/CartModal'
import { Navbar } from '../features/Navbar'
import SearchProduct from '../features/SearchProduct'

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 font-bold text-primary">
      <Store01Icon className="text-primary" />
      <span className="hidden sm:inline">Shopino</span>
    </Link>
  )
}

export default async () => {
  const allCategories = await getCategories()
  const categories = allCategories.slice(0, 5)
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <nav className="container flex items-center justify-between gap-2 px-4 py-2">
        <Logo />
        <Navbar categories={categories} />
        <div className="flex flex-1 items-center justify-end gap-2">
          <Suspense>
            <SearchProduct />
          </Suspense>
          <CartModal />
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
