import { fromNow } from '@/lib/utils'
import { getCategories } from '@/services/category'
import Link from 'next/link'
import { Suspense } from 'react'
import ProductSkeleton from './ProductSkeleton'
import CategoryListLoader from './CategoryListLoader'

const Categories = async () => {
  const categories = await getCategories()
  const categoriesToShow = categories.slice(0, 5)
  return categoriesToShow.map((c) => (
    <Link
      key={c.id}
      href={`/products?category=${c.id}`}
      className="flex flex-col items-start gap-4 rounded-lg border p-4 shadow-sm ring-primary duration-100 hover:ring-2 active:scale-95 md:flex-row md:items-center"
    >
      <img src={c.image} alt={c.name} className="size-14 rounded-md" />
      <div className="grid gap-1">
        <p className="font-semibold text-base">{c.name}</p>
        <p className="text-muted-foreground text-xs/5">
          {fromNow(c.creationAt)}
        </p>
      </div>
    </Link>
  ))
}

export default async () => {
  return (
    <section className="my-8 space-y-4">
      <h2 className="font-bold text-lg lg:text-2xl">Categories</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Suspense fallback={<CategoryListLoader />}>
          <Categories />
        </Suspense>
      </div>
    </section>
  )
}
