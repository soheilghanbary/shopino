'use client'

type Props = {
  alt: string
  image: string
}

export default ({ image, alt }: Props) => {
  return (
    <figure className="relative aspect-square">
      <img
        alt={alt}
        src={image}
        draggable={false}
        className="size-full rounded-lg bg-muted object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = '/placeholder.png' // Fallback image
        }}
      />
    </figure>
  )
}
