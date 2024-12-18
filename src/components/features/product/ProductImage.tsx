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
    <figure className="relative aspect-square">
      <img
        alt={alt}
        src={image}
        draggable={false}
        className={cn('size-full rounded-lg bg-muted object-cover')}
        onError={handleImageError}
      />
    </figure>
  )
}
