import { Clock, Footprints, HelpCircle, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Dinosaur } from '@/types/Dinosaur';

type DinoCardProps = {
  dino: Dinosaur & { isUndiscovered?: boolean };
};

const DinoCard = memo(function DinoCard({ dino }: DinoCardProps) {
  const isUndiscovered = dino.isUndiscovered || false;

  return (
    <Card
      className={`group relative overflow-hidden border-border/10 bg-background/30 ${isUndiscovered ? 'opacity-75' : ''}`}
    >
      <div className="aspect-4/3 overflow-hidden">
        {isUndiscovered ? (
          <div className="flex h-full w-full items-center justify-center bg-muted/50">
            <HelpCircle className="h-16 w-16 text-muted-foreground/50" />
          </div>
        ) : (
          <Image
            alt={dino.name}
            className="h-full w-full object-fit transition-transform duration-500 group-hover:scale-105"
            height={300}
            loading="lazy"
            src={dino.image.imageURL}
            width={400}
          />
        )}
        {!isUndiscovered && (
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </div>
      <CardContent className="p-4 sm:p-5">
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
        <div className="mt-2 flex items-center text-xs text-muted-foreground sm:text-sm capitalize">
          <Clock className="mr-1.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
          <span className="truncate">
            {isUndiscovered ? 'Unknown Era' : dino.temporalRange || 'Unknown'}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          <Badge
            className="capitalize"
            variant={isUndiscovered ? 'outline' : 'default'}
          >
            <Utensils className="mr-1.5 h-3 w-3" />
            {isUndiscovered ? 'Unknown' : dino.diet}
          </Badge>
          <Badge
            className="capitalize"
            variant={isUndiscovered ? 'outline' : 'secondary'}
          >
            <Footprints className="mr-1.5 h-3 w-3" />
            {isUndiscovered ? 'Unknown' : dino.locomotionType}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
});

export default DinoCard;
