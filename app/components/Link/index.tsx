'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const Link = ({ href, children }: { href: string; children: string }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink
      href={href}
      className={twMerge('text-white', isActive && 'text-primary')}
    >
      {children}
    </NextLink>
  )
}

export default Link
