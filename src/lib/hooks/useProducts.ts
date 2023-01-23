import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../services/products";

export const useProducts = () => {
  const {data, isLoading, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length
  });
  return {data, isLoading, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage};
};

export const useProduct = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });
  return { data, isLoading };
};
