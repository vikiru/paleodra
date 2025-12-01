import { useMemo } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import { createSearchIndex, searchQuery } from '@/lib/utils/flexSearch';
import type { Dinosaur } from '@/types/Dinosaur';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

const searchIndex = createSearchIndex(
  dinosaursData.map((dino) => ({ id: dino.id, name: dino.name })),
);

type UseFlexSearchReturn = {
  searchDinosaurs: (query: string) => number[];
  searchMatches: (query: string) => Array<{ id: number; name: string }>;
};

export function useFlexSearch(): UseFlexSearchReturn {
  const searchDinosaurs = useMemo(() => {
    return (query: string): number[] => {
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
  }, []);

  const searchMatches = useMemo(() => {
    return (query: string): Array<{ id: number; name: string }> => {
      if (!query.trim()) return [];

      try {
        return searchQuery(searchIndex, query);
      } catch (error) {
        console.warn('FlexSearch error, falling back to basic search:', error);
        const search = query.toLowerCase().trim();
        return dinosaursData
          .filter((dino) => dino.name.toLowerCase().includes(search))
          .map((dino) => ({ id: dino.id, name: dino.name }));
      }
    };
  }, []);

  return {
    searchDinosaurs,
    searchMatches,
  };
}
