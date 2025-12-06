import { memo } from 'react';
import { DinoCard } from '@/components/explore/DinoCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Spinner } from '@/components/ui/spinner';
import { useIsMounted } from '@/hooks/useIsMounted';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

type DinoGridProps = {
  dinosaurs: DinosaurMetadata[];
};

export const DinoGrid = memo(function DinoGrid({ dinosaurs }: DinoGridProps) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-[600px] max-h-[calc(100vh-17rem)] pr-4 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

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
