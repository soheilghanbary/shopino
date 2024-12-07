import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '@/components/common/carousel'

type Props = {
  images: string[]
}

export default ({ images }: Props) => {
  return (
    <Carousel className="max-w-md">
      <CarouselMainContainer className="h-96">
        {images.map((image, index) => (
          <SliderMainItem key={index}>
            <img src={image} alt="product" className="object-cover" />
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
      <CarouselThumbsContainer>
        {images.map((image, index) => (
          <SliderThumbItem key={index} index={index}>
            <img src={image} alt="product" className="object-cover" />
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  )
}
