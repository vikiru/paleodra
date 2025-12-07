import { Clock, Footprints, HelpCircle, Utensils } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

type DinoCardProps = {
  dino: DinosaurMetadata & { isUndiscovered?: boolean };
};

export const DinoCard = memo(function DinoCard({ dino }: DinoCardProps) {
  const isUndiscovered = dino.isUndiscovered || false;

  return (
    <Card
      className={`group relative overflow-hidden border-border/10 bg-background/30 ${isUndiscovered ? 'opacity-75' : ''} pt-0`}
    >
      {/* Image Section */}
      <CardContent className="px-0">
        <div className="aspect-video w-full">
          {isUndiscovered ? (
            <div className="flex h-full w-full items-center justify-center bg-muted/50">
              <HelpCircle className="h-16 w-16 text-muted-foreground/50" />
            </div>
          ) : (
            <div className="relative w-full h-full">
              {dino.imageURL ? (
                <Image
                  alt={dino.name}
                  className="rounded-t-xl object-fit"
                  fill
                  src={dino.imageURL}
                />
              ) : (
                <div className="w-full h-full bg-muted/20 rounded-t-xl" />
              )}
            </div>
          )}
        </div>
        {!isUndiscovered && (
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-0" />
        )}
      </CardContent>

      {/* Content Section */}
      <CardHeader className="px-4 pb-2">
        <CardTitle className="text-lg font-heading font-bold leading-tight sm:text-xl">
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
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground sm:text-sm capitalize">
          <Clock className="mr-1.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4 inline" />
          <span className="truncate">
            {isUndiscovered || dino.temporalRange === 'Unknown'
              ? 'Unknown Era'
              : dino.temporalRange || 'Unknown'}
          </span>
        </CardDescription>
      </CardHeader>

      {/* Badges */}
      <CardContent className="px-4 pt-0">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
