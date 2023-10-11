'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import path from 'path';
import { twMerge } from 'tailwind-merge';

export default function Link({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={twMerge('text-white', isActive && 'text-primary')}
    >
      {children}
    </NextLink>
  );
}
