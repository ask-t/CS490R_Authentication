'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import classnames from 'classnames';
import Image from 'next/image'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"


const NavBar = () => {
  const currentPath = usePathname();
  console.log(`This is the current path: ${currentPath}`);
  const links = [
    { label: "Home", href: '/' },
    { label: "dashboard", href: '/dashboard'}
  ]
  const { setTheme } = useTheme()
  return (
    <div>
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center dark:bg-black text-white'>
        <Link href='/'><div className='font-bold text-2xl'>Next Auth</div></Link>
        <ul className='flex space-x-6'>
          {links.map(link => <Link key={link.href} className={classnames({ 'text-cyan-700 font-bold': link.href === currentPath, 'text-zinc-900': link.href !== currentPath })} href={link.href}>{link.label}</Link>)}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar