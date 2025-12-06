'use client';

import { memo, useMemo, useRef } from 'react';
import { DinoGrid } from '@/components/dinodex/DinoGrid';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePaginationWithScroll } from '@/hooks/usePagination';
import type { Dinosaur } from '@/types/Dinosaur';

type PaginatedDinoGridProps = {
  dinosaurs: Dinosaur[];
  itemsPerPage?: number;
};

export const PaginatedDinoGrid = memo(function PaginatedDinoGrid({
  dinosaurs,
  itemsPerPage = 50,
}: PaginatedDinoGridProps) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const {
    currentItems,
    currentPage,
    totalPages,
    startIndex,
    handlePageChange,
    handleNextPage,
    handlePreviousPage,
    isFirstPage,
    isLastPage,
  } = usePaginationWithScroll(dinosaurs, itemsPerPage, scrollAreaRef);

  const paginationItems = useMemo(() => {
    const items = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          items.push(i);
        }
        items.push('ellipsis');
        items.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages - 1; i++) {
          items.push(i);
        }
        items.push(totalPages);
      } else {
        items.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push(i);
        }
        items.push('ellipsis');
        items.push(totalPages);
      }
    }

    return items;
  }, [currentPage, totalPages]);

  return (
    <div ref={scrollAreaRef}>
      <DinoGrid dinosaurs={currentItems} />
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-gray-500 text-sm dark:text-gray-400 whitespace-nowrap">
            Showing {startIndex + 1}-{startIndex + currentItems.length} of{' '}
            {dinosaurs.length} dinosaurs
          </div>
          <div className="ml-auto">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      isFirstPage
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                    onClick={handlePreviousPage}
                  />
                </PaginationItem>

                {paginationItems.map((value, index) => (
                  <PaginationItem
                    key={
                      value === 'ellipsis'
                        ? `ellipsis-${index}`
                        : `page-${value}`
                    }
                  >
                    {value === 'ellipsis' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        className="cursor-pointer"
                        isActive={currentPage === value}
                        onClick={() => handlePageChange(value as number)}
                      >
                        {value}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    className={
                      isLastPage
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                    onClick={handleNextPage}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
});
