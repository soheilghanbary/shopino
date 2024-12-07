import { getCategories } from '@/services/category'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })
}
