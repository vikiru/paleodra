import { useCallback, useEffect, useRef, useState } from 'react';
import { type PaginationData, usePagination } from '@/hooks/usePagination';

type PaginationScrollData<T> = PaginationData<T> & {
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  isChangingPage: boolean;
};

export function usePaginationScroll<T>(
  items: T[],
  itemsPerPage: number = 50,
  scrollAreaRef?: React.RefObject<HTMLDivElement | null>,
): PaginationScrollData<T> {
  const pagination = usePagination<T>(items, itemsPerPage);
  const previousItemsRef = useRef<T[]>([]);
  const [isChangingPage, setIsChangingPage] = useState(false);

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
      setIsChangingPage(true);
      pagination.goToPage(page);
      scrollToTop();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Brief loading state for smooth transition
      setTimeout(() => setIsChangingPage(false), 300);
    },
    [pagination.goToPage, scrollToTop],
  );

  const handleNextPage = useCallback(() => {
    setIsChangingPage(true);
    pagination.nextPage();
    scrollToTop();
    setTimeout(() => setIsChangingPage(false), 300);
  }, [pagination.nextPage, scrollToTop]);

  const handlePreviousPage = useCallback(() => {
    setIsChangingPage(true);
    pagination.previousPage();
    scrollToTop();
    setTimeout(() => setIsChangingPage(false), 300);
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
    isChangingPage,
  };
}
