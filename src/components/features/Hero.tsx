import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

export default function Hero() {
  return (
    <div className="-z-30 relative flex flex-col items-center justify-center gap-4 px-4 py-20 lg:h-[600px] lg:py-0">
      <div className="-z-10 absolute size-full bg-black/65" />
      <img
        alt="hero"
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="-z-20 absolute size-full object-cover"
      />
      <h1 className="text-center font-black text-2xl text-white lg:text-5xl">
        {siteConfig.title}
      </h1>
      <p className="text-center text-sm/5 text-white lg:text-lg">
        {siteConfig.description}
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/soheilghanbary/shopino"
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'rounded-full'
        )}
      >
        GitHub
      </a>
    </div>
  )
}
