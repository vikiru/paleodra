'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <header className="bg-background/85">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <nav className="hidden items-center space-x-8 sm:flex">
              {/* Nav links */}
              {['Home', 'Explore', 'DinoDex'].map((name) => {
                const href = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
                return (
                  <Link
                    className={
                      pathname === href
                        ? 'gradient'
                        : 'text-muted-foreground'
                    }
                    href={href}
                    key={name.toLowerCase()}
                  >
                    {name}
                  </Link>
                );
              })}
              <ThemeToggle />
            </nav>

            <div className="flex items-center sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="absolute left-0 right-0 z-50 bg-background px-4 pb-4 shadow-lg md:hidden">
              <div className="flex flex-col space-y-2 pt-2">
                {['Home', 'Explore', 'DinoDex'].map((name) => {
                  const href = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
                  return (
                    <Link
                      href={href}
                      key={name.toLowerCase()}
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>
    </ThemeProvider>
  );
}
