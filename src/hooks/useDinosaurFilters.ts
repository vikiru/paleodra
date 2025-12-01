import { useCallback, useMemo, useState } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import type { Dinosaur } from '@/types/Dinosaur';
import { useStaticSearch } from './useStaticSearch';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

export type FilterState = {
  searchQuery: string;
  diet: string;
  locomotion: string;
};

export type UseDinosaurFiltersReturn = {
  filterState: FilterState;
  setFilterState: (updates: Partial<FilterState>) => void;
  setSearchQuery: (query: string) => void;
  setDiet: (diet: string) => void;
  setLocomotion: (locomotion: string) => void;
  filteredDinosaurs: Dinosaur[];
  hasActiveFilters: boolean;
  resetFilters: () => void;
};

export function useDinosaurFilters(
  initialState?: Partial<FilterState>,
): UseDinosaurFiltersReturn {
  const [filterState, setFilterState] = useState<FilterState>({
    searchQuery: '',
    diet: 'all',
    locomotion: 'all',
    ...initialState,
  });

  const { searchDinosaurs } = useStaticSearch();

  const filteredDinosaurs = useMemo(() => {
    const dietFilter = filterState.diet === 'all' ? '' : filterState.diet;
    const locomotionFilter =
      filterState.locomotion === 'all' ? '' : filterState.locomotion;

    let dinosaurIds: number[];

    if (filterState.searchQuery.trim()) {
      dinosaurIds = searchDinosaurs(filterState.searchQuery);
    } else {
      dinosaurIds = dinosaursData.map((dino) => dino.id);
    }

    return dinosaursData.filter((dino) => {
      if (!dinosaurIds.includes(dino.id)) return false;

      const matchesDiet = !dietFilter || dino.diet === dietFilter;
      const matchesLocomotion =
        !locomotionFilter || dino.locomotionType === locomotionFilter;

      return matchesDiet && matchesLocomotion;
    });
  }, [
    filterState.searchQuery,
    filterState.diet,
    filterState.locomotion,
    searchDinosaurs,
  ]);

  const hasActiveFilters = !!(
    filterState.searchQuery.trim() ||
    filterState.diet !== 'all' ||
    filterState.locomotion !== 'all'
  );

  const setSearchQuery = useCallback((searchQuery: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery }));
  }, []);

  const setDiet = useCallback((diet: string) => {
    setFilterState((prev) => ({ ...prev, diet }));
  }, []);

  const setLocomotion = useCallback((locomotion: string) => {
    setFilterState((prev) => ({ ...prev, locomotion }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilterState({
      searchQuery: '',
      diet: 'all',
      locomotion: 'all',
    });
  }, []);

  const updateFilterState = useCallback((updates: Partial<FilterState>) => {
    setFilterState((prev) => ({ ...prev, ...updates }));
  }, []);

  return {
    filterState,
    setFilterState: updateFilterState,
    setSearchQuery,
    setDiet,
    setLocomotion,
    filteredDinosaurs,
    hasActiveFilters,
    resetFilters,
  };
}
