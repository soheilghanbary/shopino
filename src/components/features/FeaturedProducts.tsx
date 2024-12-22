import { getProducts } from '@/services/product'
import Products from './Products'

export default async () => {
  const products = await getProducts()
  return <Products products={products} />
}
