import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/layout/Logo';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/60">

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col space-y-3">
            <Logo />
            <p className="text-muted-foreground">
              Your gateway to the prehistoric world. Discover, learn, and explore the fascinating age of dinosaurs.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Explore</h4>
                <div className="space-y-2 flex flex-col items-start">
                  <Link href="/explore" className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                    All Dinosaurs
                  </Link>
                  <Link href="/dino-dex" className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                    DinoDex
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Read More</h4>
                <div className="space-y-2 flex flex-col items-start">
                  <a href="https://github.com/vikiru/paleodra" className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                    GitHub
                  </a>
                  <a href="https://vikiru.github.io/restausaurus" className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>

      <Separator orientation="horizontal" />
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Paleodra. All dinosaur info and images are sourced
          directly from Wikipedia Articles and belong to their respective authors. All dinosaur text is available under
          the{' '}
          <a
            className="hover:underline transition-all"
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
