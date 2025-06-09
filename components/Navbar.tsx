'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NavMenuPortal from './NavMenuPortal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resumé' },
    { href: '/projects', label: 'Projects' },
    { href: '/about-me', label: 'About Me' },
    { href: '/about-you', label: 'About You' },
  ];

  return (
    <nav className="z-[20] opacity-0 animate-fadeIn px-4">
      <ul className="hidden md:flex justify-center space-x-6">
      {navItems.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-lg lowercase tracking-wider transition-colors hover:text-pink-500 text-shadow-lg/30 ${
                  isActive ? 'text-white' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="fixed top-4 left-4 md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-white hover:cursor-pointer"
        >
          {isOpen ? <MenuOpenIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      <NavMenuPortal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}
