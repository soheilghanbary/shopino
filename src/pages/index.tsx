import ProductList from "@/components/modules/product-list";
import { useCategories } from "@/lib/hooks/useProducts";
import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 10;
const MIN = 0;
const MAX = 1000;

export default function Home() {
  const [price, setPrice] = useState([0, 1000]);
  const { data, isLoading } = useCategories();

  useEffect(() => {
    console.log('price updated')
  },[price])

  return (
    <div className="grid grid-cols-6 gap-8 mt-2">
      {/* <div className="col-span-2">
        <div className="p-4 rounded-lg border border-line bg-secondary sticky top-24">
          <h2 className="text-2xl font-bold text-heading">Categories</h2>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            <div className="my-6 flex gap-2 flex-wrap">
              {data.map((category: any) => (
                <div className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer duration-150 font-medium text-sm whitespace-nowrap border border-line rounded-2xl bg-secondary">
                  {category.name}
                </div>
              ))}
            </div>
          )}
          <h2 className="text-2xl font-bold text-heading">Price</h2>
          <div className="my-2">
            ${price[0]} ~ ${price[1]}
          </div>
          <div className="px-2">
            <Range
              values={price}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setPrice(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: price,
                        colors: [
                          "var(--bg-primary)",
                          "#2563EB",
                          "var(--bg-primary)",
                        ],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "24px",
                    width: "24px",
                    borderRadius: "999px",
                    backgroundColor: "#3B82F6",
                  }}
                ></div>
              )}
            />
          </div>
        </div>
      </div> */}
      <div className="col-span-6">
        <ProductList />
      </div>
    </div>
  );
}
