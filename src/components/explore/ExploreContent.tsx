'use client';

import PaginatedDinoGrid from '@/components/dinodex/PaginatedDinoGrid';
import { SearchFilters } from '@/components/explore/SearchFilters';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';

export function ExploreContent() {
  const { filteredDinosaurs } = useDinosaurFilters();

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Dinosaurs
          </h1>
          <p className="text-lg text-gray-600">
            Discover and learn about amazing prehistoric creatures
          </p>
        </div>
        <SearchFilters />
        {filteredDinosaurs.length > 0 && (
          <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
        )}
      </div>
    </div>
  );
}
