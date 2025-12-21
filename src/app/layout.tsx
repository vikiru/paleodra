import type { Metadata } from 'next';
import { Amaranth, DM_Sans, Gotu } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

const heading = Gotu({
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
  subsets: ['latin'],
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
  subsets: ['latin'],
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
      <head>
        <link href="/favicon-light.ico" media="(prefers-color-scheme: light)" rel="icon" />
        <link href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" rel="icon" />
        <link
          href="/apple-touch-icon-light.png"
          media="(prefers-color-scheme: light)"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/apple-touch-icon-dark.png"
          media="(prefers-color-scheme: dark)"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32-light.png"
          media="(prefers-color-scheme: light)"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-32x32-dark.png"
          media="(prefers-color-scheme: dark)"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16-light.png"
          media="(prefers-color-scheme: light)"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicon-16x16-dark.png"
          media="(prefers-color-scheme: dark)"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </head>
      <body
        className={`antialiased ${heading.variable} ${body.variable} ${logo.variable} flex min-h-screen flex-col bg-oklch(var(--background)) text-oklch(var(--text)) antialiased`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
