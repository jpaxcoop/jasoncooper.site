'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavMenuPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resumé' },
  { href: '/projects', label: 'Projects' },
  { href: '/about-me', label: 'About Me' },
  { href: '/about-you', label: 'About You' },
];

export default function NavMenuPortal({ isOpen, onClose }: NavMenuPortalProps) {
  const pathname = usePathname();
  const portalRoot = typeof window !== 'undefined' ? document.getElementById('portal-root') : null;
  const menuRef = useRef<HTMLUListElement | null>(null);

  // Optional: close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!portalRoot || !isOpen) return null;

  return createPortal(
    <ul
      ref={menuRef}
      className="fixed top-16 left-4 right-4 md:hidden flex flex-col space-y-4 bg-black/90 p-6 rounded text-xl"
    >
      {navItems.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className={`block lowercase tracking-wider transition-colors hover:text-pink-500 ${
                isActive ? 'text-white' : 'text-gray-300'
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>,
    portalRoot
  );
}
