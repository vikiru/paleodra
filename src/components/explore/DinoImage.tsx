import { HelpCircle } from 'lucide-react';
import Image from 'next/image';
import type { Dinosaur } from '@/types/Dinosaur';

type DinoImageProps = {
  dino: Dinosaur & { isUndiscovered?: boolean };
};

export function DinoImage({ dino }: DinoImageProps) {
  const isUndiscovered = dino.isUndiscovered || false;

  return (
    <div className="aspect-video w-full">
      {isUndiscovered ? (
        <div className="flex h-full w-full items-center justify-center bg-muted/50">
          <HelpCircle className="h-16 w-16 text-muted-foreground/50" />
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden rounded-md">
          <Image alt={dino.name} fill src={dino.image.imageURL} />
        </div>
      )}
      {!isUndiscovered && (
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-0" />
      )}
    </div>
  );
}
