export async function getProducts(offset = 0, limit = 8) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  )
  if (!res.ok) throw new Error('Failed to fetch products')
  return (await res.json()) as Product[]
}

export async function getProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  return await res.json()
}
