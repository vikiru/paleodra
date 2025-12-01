import { useMemo } from 'react';
import { useDinoStore } from '@/store/dinoStore';
import type { Dinosaur } from '@/types/Dinosaur';
import { type FilterState, useDinosaurFilters } from './useDinosaurFilters';

type DinoDexFiltersReturn = {
  filteredDinosaurs: (Dinosaur & { isUndiscovered: boolean })[];
  discoveredCount: number;
  undiscoveredCount: number;
  hasActiveFilters: boolean;
  filterState: FilterState;
  setSearchQuery: (query: string) => void;
  setDiet: (diet: string) => void;
  setLocomotion: (locomotion: string) => void;
  resetFilters: () => void;
};

export function useDinoDexFilters(): DinoDexFiltersReturn {
  const { seenIds } = useDinoStore();
  const {
    filteredDinosaurs: baseFilteredDinosaurs,
    hasActiveFilters,
    filterState,
    setSearchQuery,
    setDiet,
    setLocomotion,
    resetFilters,
  } = useDinosaurFilters();

  const filteredDinosaurs = useMemo(() => {
    return baseFilteredDinosaurs.map((dino) => ({
      ...dino,
      isUndiscovered: !seenIds.has(dino.id),
    }));
  }, [baseFilteredDinosaurs, seenIds]);

  const discoveredCount = filteredDinosaurs.filter(
    (d) => !d.isUndiscovered,
  ).length;
  const undiscoveredCount = filteredDinosaurs.filter(
    (d) => d.isUndiscovered,
  ).length;

  return {
    filteredDinosaurs,
    discoveredCount,
    undiscoveredCount,
    hasActiveFilters,
    filterState,
    setSearchQuery,
    setDiet,
    setLocomotion,
    resetFilters,
  };
}
