'use client';

import { PaginatedDinoGrid } from '@/components/dinodex/PaginatedDinoGrid';
import { DinoDexHeader } from '@/components/dinodex/DinoDexHeader';
import { DiscoveryProgress } from '@/components/dinodex/DiscoveryProgress';
import { DinoSearchControls } from '@/components/dinodex/DinoSearchControls';
import { DinoResultsInfo } from '@/components/dinodex/DinoResultsInfo';
import { useDinoDexFilters } from '@/hooks/useDinoDexFilters';

export function DinoDexContent() {
  const { filteredDinosaurs } = useDinoDexFilters();

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <DinoDexHeader />

        <div className="mb-8 space-y-4">
          <DiscoveryProgress />
          <DinoSearchControls />
        </div>

        <DinoResultsInfo />

        {filteredDinosaurs.length > 0 && (
          <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
        )}
      </div>
    </div>
  );
}
