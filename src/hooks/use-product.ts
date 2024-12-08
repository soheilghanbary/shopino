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
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam, 8),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = 33
      const currentOffset = allPages.length * 8

      // Check if we reached the total count
      if (currentOffset < totalItems) {
        return currentOffset
      }
      return undefined
    },
  })
}

export const useSearchProducts = (filter: string) => {
  return useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${filter}`
      )
      return await res.json()
    },
  })
}
