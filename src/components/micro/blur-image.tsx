import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  alt: string;
  src: string;
}

export default function BlurImage({ src, alt }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-primary xl:aspect-w-7 xl:aspect-h-6">
      <Image
        alt={alt}
        draggable="false"
        src={src}
        layout="fill"
        loading="lazy"
        objectFit="cover"
        className={`rounded-lg shadow-md
                duration-700 ease-in-out group-hover:opacity-75
                ${
                  isLoading
                    ? "blur-2xl grayscale"
                    : "blur-0 grayscale-0"
                })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
