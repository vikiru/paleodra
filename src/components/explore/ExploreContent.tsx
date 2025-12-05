'use client';

import { PaginatedDinoGrid } from '@/components/dinodex/PaginatedDinoGrid';
import { SearchFilters } from './SearchFilters';
import { ExploreResultsInfo } from './ExploreResultsInfo';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';

type ExploreContentProps = {
  searchParams: { [key: string]: string | undefined };
};

export function ExploreContent({ searchParams }: ExploreContentProps) {
  const initialState = {
    searchQuery: searchParams.search || '',
    diet: searchParams.diet || 'all',
    locomotion: searchParams.locomotion || 'all',
  };

  const { filteredDinosaurs } = useDinosaurFilters(initialState);

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">
            Explore Dinosaurs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover fascinating prehistoric creatures from across different eras
          </p>
        </div>
        
        <SearchFilters searchParams={searchParams} />
        <ExploreResultsInfo searchParams={searchParams} />

        {filteredDinosaurs.length > 0 && (
          <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
        )}
      </div>
    </div>
  );
}
