import { getProductsByCategory } from '@/services/category'
import { getProduct, getProducts } from '@/services/product'
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'

export function useProducts() {
  return useQuery({
    queryKey: ['featured-products'],
    queryFn: () => getProducts(),
  })
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })
}

export function useInfiniteProducts() {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined
      }
      return allPages.length * 10
    },
  })
}

export const useSearchProducts = () => {
  return useMutation({
    mutationFn: async (filter: string) => {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${filter}`
      )
      return await res.json()
    },
  })
}

export function useProductsByCategory(id: string) {
  return useQuery<Product[], Error>({
    queryKey: ['productsByCategory', id],
    queryFn: () => getProductsByCategory(id),
  })
}
