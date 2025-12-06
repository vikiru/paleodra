import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type UsePaginationReturn<T> = {
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

export function usePagination<T>(
  items: T[],
  itemsPerPage: number = 50,
): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items.length, itemsPerPage],
  );
  const startIndex = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage, itemsPerPage],
  );
  const endIndex = useMemo(
    () => startIndex + itemsPerPage,
    [startIndex, itemsPerPage],
  );
  const currentItems = useMemo(
    () => items.slice(startIndex, endIndex),
    [items, startIndex, endIndex],
  );

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
  const isLastPage = useMemo(
    () => currentPage === totalPages,
    [currentPage, totalPages],
  );

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

type UsePaginationWithScrollReturn<T> = UsePaginationReturn<T> & {
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

export function usePaginationWithScroll<T>(
  items: T[],
  itemsPerPage: number = 50,
  scrollAreaRef?: React.RefObject<HTMLDivElement | null>,
): UsePaginationWithScrollReturn<T> {
  const pagination = usePagination<T>(items, itemsPerPage);
  const previousItemsRef = useRef<T[]>([]);

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

  const handlePageChange = useCallback(
    (page: number) => {
      pagination.goToPage(page);
      scrollToTop();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [pagination.goToPage, scrollToTop],
  );

  const handleNextPage = useCallback(() => {
    pagination.nextPage();
    scrollToTop();
  }, [pagination.nextPage, scrollToTop]);

  const handlePreviousPage = useCallback(() => {
    pagination.previousPage();
    scrollToTop();
  }, [pagination.previousPage, scrollToTop]);

  useEffect(() => {
    if (previousItemsRef.current !== items) {
      pagination.resetToFirstPage();
      scrollToTop();
      previousItemsRef.current = items;
    }
  }, [items, pagination.resetToFirstPage, scrollToTop]);

  return {
    ...pagination,
    handlePageChange,
    handleNextPage,
    handlePreviousPage,
  };
}
