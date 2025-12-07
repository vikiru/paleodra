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
import { Spinner } from '@/components/ui/spinner';
import { usePaginationScroll } from '@/hooks/usePaginationScroll';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

type PaginatedDinoGridProps = {
  dinosaurs: DinosaurMetadata[];
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
    isChangingPage,
  } = usePaginationScroll(dinosaurs, itemsPerPage, scrollAreaRef);

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
    <div className="relative" ref={scrollAreaRef}>
      {isChangingPage && (
        <div className="h-[600px] max-h-[calc(100vh-17rem)] pr-4 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <DinoGrid dinosaurs={currentItems} />
      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
          <div className="text-gray-500 text-sm dark:text-gray-400 whitespace-nowrap px-2 sm:px-0">
            Showing {startIndex + 1}-{startIndex + currentItems.length} of{' '}
            {dinosaurs.length} dinosaurs
          </div>
          <div className="overflow-x-auto">
            <Pagination>
              <PaginationContent className="flex-wrap justify-center lg:justify-start">
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
                        className="cursor-pointer text-xs sm:text-sm min-w-8 sm:min-w-10"
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
