import { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DinoImage } from './DinoImage';
import { DinoName } from './DinoName';
import { DinoMetadata } from './DinoMetadata';
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
      <DinoImage dino={dino} />
      <CardContent className="p-4 sm:p-5">
        <DinoName dino={dino} />
        <DinoMetadata dino={dino} />
      </CardContent>
    </Card>
  );
});

export default DinoCard;
