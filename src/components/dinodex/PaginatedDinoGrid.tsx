'use client';

import { memo, useCallback, useRef } from 'react';
import { Pagination } from '@/components/dinodex/Pagination';
import DinoCard from '@/components/explore/DinoCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Dinosaur } from '@/types/Dinosaur';

type PaginatedDinoGridProps = {
  dinosaurs: Dinosaur[];
};

export function PaginatedDinoGrid({ dinosaurs }: PaginatedDinoGridProps) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const renderDinosaurs = useCallback(
    (currentDinosaurs: Dinosaur[]) => (
      <ScrollArea
        className="h-[calc(100vh-17rem)] pr-4 overscroll-contain"
        id="dino-grid-scroll-area"
        ref={scrollAreaRef}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentDinosaurs.map((dino) => (
            <DinoCard dino={dino} key={dino.id} />
          ))}
        </div>
      </ScrollArea>
    ),
    [],
  );

  return (
    <Pagination<Dinosaur>
      items={dinosaurs}
      itemsPerPage={50}
      scrollAreaRef={scrollAreaRef}
    >
      {renderDinosaurs}
    </Pagination>
  );
}

export default memo(PaginatedDinoGrid);
