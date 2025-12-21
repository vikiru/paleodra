import { useMemo } from 'react';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';
import { useDinoStore } from '@/store/dinoStore';
import { useSearchStore } from '@/store/searchStore';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

type DinoDexFilterData = {
  filteredDinosaurs: (DinosaurMetadata & { isUndiscovered: boolean })[];
  discoveredCount: number;
  undiscoveredCount: number;
  hasActiveFilters: boolean;
  isLoading: boolean;
};

export function useDinoDexFilters(): DinoDexFilterData {
  const { seenIds } = useDinoStore();
  const { filteredDinosaurs: baseFilteredDinosaurs, isLoading } = useDinosaurFilters();
  const { searchQuery, diet, locomotion } = useSearchStore();

  const filteredDinosaurs = useMemo(() => {
    return baseFilteredDinosaurs.map((dino) => ({
      ...dino,
      isUndiscovered: !seenIds.has(dino.id),
    }));
  }, [baseFilteredDinosaurs, seenIds]);

  const discoveredCount = filteredDinosaurs.filter((d) => !d.isUndiscovered).length;
  const undiscoveredCount = filteredDinosaurs.filter((d) => d.isUndiscovered).length;

  const hasActiveFilters = searchQuery !== '' || diet !== 'all' || locomotion !== 'all';

  return {
    filteredDinosaurs,
    discoveredCount,
    undiscoveredCount,
    hasActiveFilters,
    isLoading,
  };
}
