export async function getCategories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories')
  return await res.json()
}
