import { getCategories, getCategory } from '@/services/category'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })
}

export function useCategory(id: string) {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () => getCategory(id),
  })
}
