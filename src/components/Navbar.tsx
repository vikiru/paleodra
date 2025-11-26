'use client';

import {
  BookOpen,
  Home,
  Menu,
  Search,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/layout/Logo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Explore',
      href: '/explore',
    },
    {
      name: 'DinoDex',
      href: '/dino-dex',
    },
  ];

  return (
    <header className="bg-background/85">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 sm:flex">
            {navItems.map((item) => (
              <Link
                className={`flex items-center space-x-1.5 font-medium transition-colors hover:underline ${pathname === item.href
                  ? 'gradient'
                  : 'text-muted-foreground'
                  }`}
                href={item.href}
                key={item.href}
              >
                <span>{item.name}</span>
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              aria-label="Toggle menu"
              className="rounded-lg p-2 text-muted-foreground "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 z-50 bg-background px-4 pb-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => (
                <Link
                  className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:underline ${pathname === item.href
                    ? 'gradient'
                    : 'text-muted-foreground'
                    }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
