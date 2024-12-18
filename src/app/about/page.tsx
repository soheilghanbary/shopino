import MadeBy from '@/components/features/MadeBy'

export default function About() {
  return (
    <div className="container px-4 py-12">
      <h1 className="mb-2 font-black text-3xl">About Shopino</h1>
      <p className="text-foreground/80 text-sm/6">
        Shopino is a modern and responsive e-commerce platform built with
        Next.js, React, TailwindCSS, and TypeScript. The project demonstrates
        advanced front-end development techniques and serves as a showcase for
        modern e-commerce web application design.
      </p>
      <MadeBy />
    </div>
  )
}
