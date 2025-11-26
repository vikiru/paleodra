import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-20" id="hero">
      <div className="container px-4 text-center">
        <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-foreground text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          Discover the <span className="logo gradient">Prehistoric World</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
          Journey through time and explore the fascinating world of dinosaurs
          with our comprehensive encyclopedia
        </p>

        <div className="flex flex-col items-center justify-center">
          <Button asChild size={"xl"}>
            <Link className="text-base" href="/explore">
              Explore Dinosaurs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
