import { useMemo } from 'react';
import dinoMetadata from '@/data/dinoMetadata.json';
import { useSearchInitializer } from '@/hooks/useSearchInitializer';
import { searchQuery } from '@/lib/utils/flexSearch';
import { useSearchStore } from '@/store/searchStore';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

const dinosaursData = dinoMetadata as unknown as DinosaurMetadata[];

export function useStaticSearch() {
  const { isInitialized } = useSearchInitializer();
  const searchIndex = useSearchStore((state) => state.searchIndex);

  const searchDinosaur = useMemo(() => {
    return (query: string): number[] => {
      if (!searchIndex) return dinosaursData.map((dino) => dino.id);

      if (!query.trim()) return dinosaursData.map((dino) => dino.id);

      try {
        const matches = searchQuery(searchIndex, query);
        return matches.map((match) => match.id);
      } catch (error) {
        console.warn('FlexSearch error, falling back to basic search:', error);
        const search = query.toLowerCase().trim();
        return dinosaursData
          .filter((dino) => dino.name.toLowerCase().includes(search))
          .map((dino) => dino.id);
      }
    };
  }, [searchIndex]);

  return {
    searchDinosaur,
    isLoading: !isInitialized,
  };
}
