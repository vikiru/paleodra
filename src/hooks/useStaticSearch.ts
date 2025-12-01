import { useSearchStore } from '@/store/searchStore';
import { useSearchInitializer } from './useSearchInitializer';

export function useStaticSearch() {
  const { isInitialized } = useSearchInitializer();
  const searchDinosaurs = useSearchStore((state) => state.searchDinosaurs);
  const searchMatches = useSearchStore((state) => state.searchMatches);

  return {
    searchDinosaurs,
    searchMatches,
    isLoading: !isInitialized,
  };
}
