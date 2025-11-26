import type { Metadata } from 'next';
import { Amaranth, DM_Sans, Gotu } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import ThemeProvider from '@/components/providers/ThemeProvider';

const heading = Gotu({
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const body = DM_Sans({
  weight: '400',
  variable: '--font-body',
  display: 'swap',
  subsets: ['latin'],
  preload: true,
});

const logo = Amaranth({
  weight: '400',
  variable: '--font-logo',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  description:
    'Discover ancient dinosaur species and their distinct characteristics and images from the prehistoric era',
  title: 'Paleodra | Dinosaur Discovery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} ${logo.variable} flex min-h-screen flex-col bg-oklch(var(--background)) text-oklch(var(--text)) antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
