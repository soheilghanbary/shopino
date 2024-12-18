'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn, fromNow } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'

type Props = {
  categories: Category[]
}

export const Navbar = ({ categories }: Props) => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mt-4 mb-2 font-medium text-lg">Shopino</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Shopino is a modern and responsive e-commerce platform
                      built with Next.js
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                target="_blank"
                title="GitHub"
                href="https://github.com/soheilghanbary/shopino"
              >
                Source code of the Shopino project.
              </ListItem>
              <ListItem
                target="_blank"
                href="https://soheilghanbary.ir/en"
                title="Author"
              >
                Soheil - Author of the Shopino
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((c) => (
                <NavigationMenuLink key={c.id} asChild>
                  <Link
                    href={`/products?category=${c.id}`}
                    className="flex flex-col items-start gap-4 rounded-lg border p-4 ring-primary duration-100 hover:ring-2 active:scale-95 md:flex-row md:items-center"
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="size-14 rounded-md"
                    />
                    <div className="grid gap-0.5">
                      <p className="font-semibold text-sm">{c.name}</p>
                      <p className="text-muted-foreground text-xs/5">
                        {fromNow(c.creationAt)}
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
