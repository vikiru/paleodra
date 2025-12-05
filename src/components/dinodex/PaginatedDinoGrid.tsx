'use client';

import { memo, useRef } from 'react';
import { DinoGrid } from '@/components/dinodex/DinoGrid';
import { usePagination } from '@/hooks/usePagination';
import type { Dinosaur } from '@/types/Dinosaur';

type PaginatedDinoGridProps = {
  dinosaurs: Dinosaur[];
};

export function PaginatedDinoGrid({ dinosaurs }: PaginatedDinoGridProps) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    previousPage,
    isFirstPage,
    isLastPage,
  } = usePagination(dinosaurs, 50);

  return (
    <div>
      <DinoGrid dinosaurs={currentItems} />
      <div className="flex justify-center mt-4 gap-2">
        <button 
          onClick={previousPage} 
          disabled={isFirstPage}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">
          {currentPage} of {totalPages}
        </span>
        <button 
          onClick={nextPage} 
          disabled={isLastPage}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default memo(PaginatedDinoGrid);
