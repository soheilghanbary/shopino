interface Product {
  id: string
  title: string
  price: number
  images: string[]
  description: string
  category: {
    id: string
    name: string
  }
}

interface BreadcrumbItemProps {
  title: string
}
