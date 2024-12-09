import { getProductsByCategory } from '@/services/category'
import Products from '../Products'

type Props = {
  id: string
  productId: string
}

export default async ({ id, productId }: Props) => {
  const data = await getProductsByCategory(id)
  const products = data.filter((product) => product.id !== Number(productId))

  return <Products products={products} />
}
