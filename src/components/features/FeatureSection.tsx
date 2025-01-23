import { cn } from '@/lib/utils'
import {
  IconAdjustmentsBolt,
  IconBolt,
  IconCloud,
  IconDeviceMobile,
  IconEaseInOut,
  IconHeart,
  IconSearch,
  IconTerminal2,
} from '@tabler/icons-react'

export function FeaturesSection() {
  const features = [
    {
      title: 'Built for developers',
      description:
        'Built for engineers, developers, dreamers, thinkers and doers.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Ease of use',
      description:
        "We've got you covered. You don't need to know how to code to use us.",
      icon: <IconEaseInOut />,
    },
    {
      title: 'Made by Next.JS',
      description:
        'we are using the modern stack with Next.js, React, TailwindCSS, and TypeScript.',
      icon: <IconBolt />,
    },
    {
      title: '100% Performance',
      description: 'We just cannot be taken down by anyone.',
      icon: <IconCloud />,
    },
    {
      title: 'Fast Search Engine',
      description: 'You can search for anything you want.',
      icon: <IconSearch />,
    },
    {
      title: 'Responsive & Mobile Friendly',
      description:
        'It works on all devices, including mobile phones and tablets.',
      icon: <IconDeviceMobile />,
    },
    {
      title: 'And everything else',
      description: 'I just ran out of copy ideas. Accept my sincere apologies',
      icon: <IconHeart />,
    },
    {
      title: 'Open Source',
      description:
        'If you donot like EveryAI, we will convince you to like us.',
      icon: <IconAdjustmentsBolt />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex flex-col border-border py-10 lg:border-r',
        (index === 0 || index === 4) && 'border-border lg:border-l',
        index < 4 && 'border-border lg:border-b'
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-muted/40 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-muted/40 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 mb-4 px-10 text-foreground">{icon}</div>
      <div className="relative z-10 mb-2 px-10 font-bold text-lg">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-muted transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
        <span className="inline-block text-foreground transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-foreground/75 text-sm">
        {description}
      </p>
    </div>
  )
}
