import { getProductsByCategory } from '@/services/category'
import { Suspense } from 'react'
import Products, { ProductsLoader } from '../Products'

type Props = {
  id: string
  productId: string
}

const ProductsByCategory = async ({ id, productId }: Props) => {
  const data = await getProductsByCategory(id)
  const products = data.filter((product) => product.id !== Number(productId))

  return <Products products={products} />
}

export default ({ id, productId }: Props) => {
  return (
    <Suspense fallback={<ProductsLoader />}>
      <ProductsByCategory id={id} productId={productId} />
    </Suspense>
  )
}
