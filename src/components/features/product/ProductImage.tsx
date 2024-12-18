'use client'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
  alt: string
  image: string
}

export default ({ image, alt }: Props) => {
  const [loaded, setLoaded] = useState(false)
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
        className={cn(
          'size-full rounded-lg bg-muted object-cover duration-500 ease-in-out',
          !loaded ? 'blur-sm grayscale' : ''
        )}
        onError={handleImageError}
        onLoad={() => setLoaded(true)}
      />
    </figure>
  )
}
