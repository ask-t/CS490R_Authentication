'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import classnames from 'classnames';
import { useTheme } from "next-themes"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const NavBar = () => {
  const currentPath = usePathname();
  console.log(`This is the current path: ${currentPath}`);
  const links = [
    { label: "Home", href: '/' },
    { label: "Dashboard", href: '/dashboard' }
  ];
  const { setTheme } = useTheme();
  return (
    <div>
      <nav className='border-b h-14 flex justify-between items-center px-5 dark:bg-black text-white'>
        <Link href='/'><div className='font-bold text-2xl'>Next Auth</div></Link>
        <div className='flex items-center space-x-6'>
          <ul className='flex space-x-6'>
            {links.map(link => (
              <Link key={link.href} href={link.href}
                className={classnames('hover:underline', { 'text-cyan-700 font-bold dark:text-cyan-500': link.href === currentPath, 'text-zinc-900 dark:text-white': link.href !== currentPath })}>
                  {link.label}
              </Link>
            ))}
          </ul>
          <div className='flex items-center space-x-2'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;