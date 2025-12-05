import Link from 'next/link';
import type { Dinosaur } from '@/types/Dinosaur';

type DinoNameProps = {
  dino: Dinosaur & { isUndiscovered?: boolean };
};

export function DinoName({ dino }: DinoNameProps) {
  const isUndiscovered = dino.isUndiscovered || false;

  return (
    <h3 className="text-lg font-heading font-bold leading-tight sm:text-xl">
      {isUndiscovered ? (
        <span className="text-muted-foreground">Undiscovered Species</span>
      ) : (
        <Link
          className="after:absolute after:inset-0 hover:text-primary transition-colors"
          href={`/dinos/${dino.id}`}
        >
          {dino.name}
        </Link>
      )}
    </h3>
  );
}
