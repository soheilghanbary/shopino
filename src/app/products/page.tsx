import ProductList from '@/components/features/ProductList'

export const metadata = {
  title: 'Products Page',
}

export default () => {
  return (
    <section className="container p-4">
      <h1 className="font-black text-2xl">All Products</h1>
      <ProductList />
    </section>
  )
}
