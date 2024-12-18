export async function getProducts(offset = 0, limit = 10, categoryId?: string) {
  if (categoryId) {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=${offset}&limit=${limit}`,
      {
        cache: 'no-cache',
      }
    )
    if (!res.ok) throw new Error('Failed to fetch products')
    return (await res.json()) as Product[]
  }
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
    {
      cache: 'no-cache',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch products')
  return (await res.json()) as Product[]
}

export async function getProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: 'reload',
  })
  return (await res.json()) as Product
}
