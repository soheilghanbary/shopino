import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="-z-30 relative flex flex-col items-center justify-center gap-4 lg:h-[600px]">
      <div className="-z-10 absolute size-full bg-black/65" />
      <img
        alt="hero"
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="-z-20 absolute size-full object-cover"
      />
      <h1 className="font-black text-white lg:text-5xl">
        Shopino: The Minimal E-Commerce App
      </h1>
      <Button variant={'outline'} className="rounded-full">
        Get Started
      </Button>
    </div>
  )
}
