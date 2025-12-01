'use client';

import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';
import { PaginatedDinoGrid } from '../dinodex/PaginatedDinoGrid';
import { EmptyResults } from '../search/EmptyResults';
import { FilterPanel } from '../search/FilterPanel';
import { SearchBar } from '../search/SearchBar';

type ExploreContentProps = {
  searchParams: { [key: string]: string | undefined };
};

export function ExploreContent({ searchParams }: ExploreContentProps) {
  const initialState = {
    searchQuery: searchParams.search || '',
    diet: searchParams.diet || 'all',
    locomotion: searchParams.locomotion || 'all',
  };

  const {
    filterState,
    setSearchQuery,
    setDiet,
    setLocomotion,
    filteredDinosaurs,
    hasActiveFilters,
  } = useDinosaurFilters(initialState);

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">
            Explore Dinosaurs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover fascinating prehistoric creatures from across different
            eras
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar
            onChange={setSearchQuery}
            placeholder="Search for a dinosaur..."
            value={filterState.searchQuery}
          />
          <FilterPanel
            diet={filterState.diet}
            locomotion={filterState.locomotion}
            onDietChange={setDiet}
            onLocomotionChange={setLocomotion}
          />
        </div>

        {hasActiveFilters && (
          <div className="mb-6">
            {filteredDinosaurs.length > 0 ? (
              <p className="text-sm text-muted-foreground">
                Found {filteredDinosaurs.length} dinosaur
                {filteredDinosaurs.length !== 1 ? 's' : ''}
              </p>
            ) : (
              <EmptyResults message="No dinosaurs match your search and filter criteria" />
            )}
          </div>
        )}

        {filteredDinosaurs.length > 0 && (
          <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
        )}
      </div>
    </div>
  );
}
