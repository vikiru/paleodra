'use client';

import { useEffect } from 'react';
import { PaginatedDinoGrid } from '@/components/dinodex/PaginatedDinoGrid';
import { SearchFilters } from '@/components/explore/SearchFilters';
import { EmptyResults } from '@/components/search/EmptyResults';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';
import { useSearchStore } from '@/store/searchStore';

export function ExploreContent() {
  const { filteredDinosaurs } = useDinosaurFilters();
  const { resetFilters } = useSearchStore();

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-full">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-heading font-bold sm:text-5xl">
            Explore Dinosaurs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover and learn about amazing prehistoric creatures
          </p>
        </div>
        <SearchFilters />
        {filteredDinosaurs.length > 0 ? (
          <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
        ) : (
          <EmptyResults message="No dinosaurs match your search and filter criteria" />
        )}
      </div>
    </div>
  );
}
