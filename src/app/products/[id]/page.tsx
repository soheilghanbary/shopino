import SingleProduct from '@/components/features/SingleProduct'

export default async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  return (
    <section className="container mx-auto px-4 py-6">
      <SingleProduct id={id} />
    </section>
  )
}
