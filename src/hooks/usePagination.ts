import { useCallback, useMemo, useState } from 'react';

export type PaginationData<T> = {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  resetToFirstPage: () => void;
};

export function usePagination<T>(items: T[], itemsPerPage: number = 50): PaginationData<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items.length, itemsPerPage]);
  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const endIndex = useMemo(() => startIndex + itemsPerPage, [startIndex, itemsPerPage]);
  const currentItems = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]);

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages],
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [goToPage, currentPage]);

  const previousPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [goToPage, currentPage]);

  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isLastPage = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);

  return {
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
  };
}
