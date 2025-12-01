import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  PaginationContent,
  PaginationItem,
  Pagination as ShadcnPagination,
} from '@/components/ui/pagination';
import { usePagination } from '@/hooks/usePagination';

type PaginationProps<T> = {
  items: T[];
  itemsPerPage?: number;
  scrollAreaRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  children: (
    currentItems: T[],
    startIndex: number,
    endIndex: number,
  ) => React.ReactNode;
};

export function Pagination<T>({
  items,
  itemsPerPage = 50,
  scrollAreaRef,
  className,
  children,
}: PaginationProps<T>) {
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    goToPage,
    nextPage,
    previousPage,
    isFirstPage,
    isLastPage,
    resetToFirstPage,
  } = usePagination(items, itemsPerPage);

  const scrollToTop = useCallback(() => {
    if (scrollAreaRef?.current) {
      const viewport = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]',
      ) as HTMLElement;
      if (viewport) {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [scrollAreaRef]);

  const previousItemsRef = useRef<T[]>([]);

  useEffect(() => {
    if (previousItemsRef.current !== items) {
      resetToFirstPage();
      scrollToTop();
      previousItemsRef.current = items;
    }
  }, [items, resetToFirstPage, scrollToTop]);

  const handlePageChange = useCallback(
    (page: number) => {
      goToPage(page);
      scrollToTop();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [goToPage, scrollToTop],
  );

  const handleNextPage = useCallback(() => {
    nextPage();
    scrollToTop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [nextPage, scrollToTop]);

  const handlePreviousPage = useCallback(() => {
    previousPage();
    scrollToTop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [previousPage, scrollToTop]);

  const paginationItems = useMemo(() => {
    const items: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is less than or equal to maxVisible
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Always show a continuous range of 5 pages around current page
      let startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisible - 1);

      // Adjust start if we're near the end
      if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }
    }

    return items;
  }, [currentPage, totalPages]);

  return (
    <div className="space-y-6">
      {items.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">No items found</p>
        </div>
      ) : (
        <>
          {children(currentItems, startIndex, endIndex)}

          {totalPages > 1 && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-muted-foreground text-center sm:text-left">
                Showing {startIndex + 1}-{Math.min(endIndex, items.length)} of{' '}
                {items.length} items
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-2">
                {/* Mobile pagination */}
                <div className="flex justify-center gap-2 sm:hidden">
                  <Button
                    disabled={isFirstPage}
                    onClick={handlePreviousPage}
                    size="sm"
                    variant="outline"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="flex items-center px-3 text-sm text-muted-foreground">
                    {currentPage} / {totalPages}
                  </span>
                  <Button
                    disabled={isLastPage}
                    onClick={handleNextPage}
                    size="sm"
                    variant="outline"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Desktop pagination */}
                <div className="hidden sm:block">
                  <ShadcnPagination className={className}>
                    <PaginationContent>
                      <PaginationItem>
                        <Button
                          className="gap-1"
                          disabled={isFirstPage}
                          onClick={handlePreviousPage}
                          size="sm"
                          variant="outline"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                      </PaginationItem>

                      {paginationItems.map((pageNum) => (
                        <PaginationItem key={pageNum}>
                          <Button
                            onClick={() => handlePageChange(pageNum)}
                            size="sm"
                            variant={
                              currentPage === pageNum ? 'default' : 'outline'
                            }
                          >
                            {pageNum}
                          </Button>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <Button
                          className="gap-1"
                          disabled={isLastPage}
                          onClick={handleNextPage}
                          size="sm"
                          variant="outline"
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </ShadcnPagination>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
