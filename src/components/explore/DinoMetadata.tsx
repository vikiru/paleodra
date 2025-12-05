import { Clock, Footprints, Utensils } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Dinosaur } from '@/types/Dinosaur';

type DinoMetadataProps = {
  dino: Dinosaur & { isUndiscovered?: boolean };
};

export function DinoMetadata({ dino }: DinoMetadataProps) {
  const isUndiscovered = dino.isUndiscovered || false;

  return (
    <>
      <div className="mt-2 flex items-center text-xs text-muted-foreground sm:text-sm capitalize">
        <Clock className="mr-1.5 h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
        <span className="truncate">
          {isUndiscovered || dino.temporalRange === 'Unknown'
            ? 'Unknown Era'
            : dino.temporalRange || 'Unknown'}
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
    </>
  );
}
