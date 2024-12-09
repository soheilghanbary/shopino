export async function getCategories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories')
  return await res.json()
}

export async function getCategory(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
  return await res.json()
}

export async function getProductsByCategory(id: string) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  )
  return (await res.json()) as Product[]
}
