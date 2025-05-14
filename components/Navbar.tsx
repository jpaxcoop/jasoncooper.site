'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resumé' },
    { href: '/projects', label: 'Projects' },
    { href: '/about-me', label: 'About Me' },
    { href: '/about-you', label: 'About You' },
  ];

  return (
    <nav className="opacity-0 animate-fadeIn delay-300 px-4">
      <ul className="flex flex-wrap sm:flex-nowrap justify-center space-x-6">
      {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`lowercase tracking-wider transition-colors hover:text-pink-500 ${
                  isActive ? 'text-white' : 'text-gray-300'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
