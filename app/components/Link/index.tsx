'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const Link = ({
  href,
  children,
  className = '',
}: {
  href: string
  children: string
  className?: string
}) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink
      href={href}
      className={twMerge(className, isActive && 'text-primary')}
    >
      {children}
    </NextLink>
  )
}

export default Link
