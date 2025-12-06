import { memo } from 'react';
import { DinoCard } from '@/components/explore/DinoCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Dinosaur } from '@/types/Dinosaur';

type DinoGridProps = {
  dinosaurs: Dinosaur[];
};

export const DinoGrid = memo(function DinoGrid({ dinosaurs }: DinoGridProps) {
  return (
    <ScrollArea
      className="h-[600px] max-h-[calc(100vh-17rem)] pr-4 overscroll-contain"
      id="dino-grid-scroll-area"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dinosaurs.map((dino) => (
          <DinoCard dino={dino} key={dino.id} />
        ))}
      </div>
    </ScrollArea>
  );
});
