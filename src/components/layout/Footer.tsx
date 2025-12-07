import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="w-full px-2 sm:px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start lg:items-center">
          <div className="flex flex-col space-y-3">
            <Logo />
            <p className="text-muted-foreground text-sm sm:text-base">
              Your gateway to the prehistoric world. Discover, learn, and
              explore the fascinating age of dinosaurs.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mt-2 lg:mt-0">
                <h4 className="font-semibold text-foreground mb-2">Explore</h4>
                <div className="space-y-2 flex flex-col items-start">
                  <Link
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors text-sm sm:text-base"
                    href="/explore"
                  >
                    All Dinosaurs
                  </Link>
                  <Link
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors text-sm sm:text-base"
                    href="/dinodex"
                  >
                    DinoDex
                  </Link>
                </div>
              </div>

              <div className="mt-2 lg:mt-0">
                <h4 className="font-semibold text-foreground mb-2">
                  Read More
                </h4>
                <div className="space-y-2 flex flex-col items-start">
                  <a
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors text-sm sm:text-base"
                    href="https://github.com/vikiru/paleodra"
                  >
                    GitHub
                  </a>
                  <a
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors text-sm sm:text-base"
                    href="https://vikiru.github.io/restasaurus/"
                  >
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <Separator orientation="horizontal" />
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          © {currentYear} Paleodra. All dinosaur info and images are sourced
          directly from Wikipedia Articles and belong to their respective
          authors. All dinosaur text is available under the{' '}
          <a
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 License
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
