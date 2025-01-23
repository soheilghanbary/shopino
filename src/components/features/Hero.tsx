import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { buttonVariants } from '../ui/button'

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 px-4 py-20 lg:h-[600px] lg:py-0">
      <div className="-z-10 absolute size-full bg-black/65" />
      <Image
        fill
        priority
        alt="Shopino"
        src="/hero.jpg"
        className="-z-20 size-full object-cover"
      />
      <h1 className="animate-delay-150 animate-fade-up text-center font-black text-3xl text-white lg:text-5xl">
        {siteConfig.title}
      </h1>
      <p className="animate-delay-200 animate-fade-up text-center text-sm/5 text-white lg:text-lg">
        {siteConfig.description}
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/soheilghanbary/shopino"
        className={cn(
          buttonVariants({ variant: 'default', size: 'lg' }),
          'animate-delay-300 animate-fade-up rounded-full'
        )}
      >
        GitHub
      </a>
    </div>
  )
}
