import { useProducts } from "@/lib/hooks/useProducts";
import { useRef, useCallback, useEffect } from "react";
import BlurImage from "../micro/blur-image";

export default function ProductList() {
  const {
    data,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useProducts();
  const observerElem = useRef(null);

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries;
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element: any = observerElem.current;
    const option = { rootMargin: "100px", threshold: 1.0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <>
      <h1 className="text-2xl font-bold text-heading mb-3">Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {isSuccess &&
          data?.pages.map((page) =>
            page.map((product: any, i: number) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-secondary border border-line cursor-pointer"
              >
                <BlurImage alt={product.title} src={product.images[0]} />
                <div className="flex flex-col mt-4">
                  <h2 className="text-sm">{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          )}
        <div className="loader" ref={observerElem}>
          {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
        </div>
      </div>
    </>
  );
}
