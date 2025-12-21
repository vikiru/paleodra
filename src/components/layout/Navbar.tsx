'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { Button } from '@/components/ui/button';
import { useMobileNav } from '@/hooks/useMobileNav';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <header className="bg-background/85">
        <div className="w-full px-2 sm:px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-6 lg:space-x-8">
              {/* Nav links */}
              {['Home', 'Explore', 'DinoDex'].map((name) => {
                const href = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
                return (
                  <Link
                    className={pathname === href ? 'gradient' : 'text-muted-foreground'}
                    href={href}
                    key={name.toLowerCase()}
                  >
                    {name}
                  </Link>
                );
              })}
              <ThemeToggle />
            </nav>

            <div className="flex items-center lg:hidden">
              <Button
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                onClick={toggleMenu}
                size="icon"
                variant="ghost"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <nav
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 z-50 bg-background px-2 sm:px-4 pb-4 shadow-lg lg:hidden transform transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              <div className="flex flex-col space-y-2 pt-2">
                {['Home', 'Explore', 'DinoDex'].map((name) => {
                  const href = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
                  return (
                    <Link
                      className="block py-2 px-3 rounded-md hover:bg-accent transition-all duration-200 transform hover:translate-x-1"
                      href={href}
                      key={name.toLowerCase()}
                      onClick={closeMenu}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>
    </ThemeProvider>
  );
}
