'use client';

import { useMemo, useState } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import type { Dinosaur } from '@/types/Dinosaur';
import { FilterPanel } from '../search/FilterPanel';
import { SearchBar } from '../search/SearchBar';
import { PaginatedDinoGrid } from '../dinodex/PaginatedDinoGrid';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

type ExploreContentProps = {
  searchParams: { [key: string]: string | undefined };
};

export function ExploreContent({ searchParams }: ExploreContentProps) {
  const [searchQuery, setSearchQuery] = useState(searchParams.search || '');
  const [diet, setDiet] = useState(searchParams.diet || 'all');
  const [locomotion, setLocomotion] = useState(
    searchParams.locomotion || 'all',
  );

  const filteredDinosaurs = useMemo(() => {
    const search = searchQuery.toLowerCase();
    const dietFilter = diet === 'all' ? '' : diet;
    const locomotionFilter = locomotion === 'all' ? '' : locomotion;

    return dinosaursData.filter((dino) => {
      const matchesSearch = dino.name.toLowerCase().includes(search);
      const matchesDiet = !dietFilter || dino.diet === dietFilter;
      const matchesLocomotion =
        !locomotionFilter || dino.locomotionType === locomotionFilter;

      return matchesSearch && matchesDiet && matchesLocomotion;
    });
  }, [searchQuery, diet, locomotion]);

  const hasActiveFilters = searchQuery || diet !== 'all' || locomotion !== 'all';

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
            value={searchQuery}
          />
          <FilterPanel
            diet={diet}
            locomotion={locomotion}
            onDietChange={setDiet}
            onLocomotionChange={setLocomotion}
          />
          {hasActiveFilters && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Found {filteredDinosaurs.length} dinosaur{filteredDinosaurs.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>

        <PaginatedDinoGrid dinosaurs={filteredDinosaurs} />
      </div>
    </div>
  );
}
