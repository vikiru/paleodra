import { useEffect } from 'react';
import searchIndexData from '@/data/searchIndex.json';
import { useSearchStore } from '@/store/searchStore';
import type { SearchIndex } from '@/types/SearchIndex';

export function useSearchInitializer() {
  const initializeSearch = useSearchStore((state) => state.initializeSearch);
  const isInitialized = useSearchStore((state) => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) {
      const searchIndex = searchIndexData as SearchIndex[];
      initializeSearch(searchIndex);
    }
  }, [initializeSearch, isInitialized]);

  return { isInitialized };
}
