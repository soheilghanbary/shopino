import { IconHome, IconUser, IconMessage } from '@tabler/icons-react'
import { FloatingNav } from '../ui/floating-navbar'

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]

export const Navbar = () => {
  return <FloatingNav navItems={navItems} />
}
