'use client'
import { cn } from '@/lib/utils'

type Props = {
  alt: string
  image: string
}

export default ({ image, alt }: Props) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = '/placeholder.png' // Fallback image
  }
  return (
    <figure className="relative aspect-square overflow-hidden rounded-xl">
      <img
        alt={alt}
        src={image}
        draggable={false}
        className={cn(
          'size-full shrink-0 rounded-[inherit] bg-muted object-cover duration-300 hover:scale-110'
        )}
        onError={handleImageError}
      />
    </figure>
  )
}
