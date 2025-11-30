'use client';
import { useMemo, useState } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import type { Dinosaur } from '@/types/Dinosaur';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

import { EmptyResults } from '@/components/search/EmptyResults';
import { FilterPanel } from '@/components/search/FilterPanel';
import { SearchBar } from '@/components/search/SearchBar';
import { Progress } from '@/components/ui/progress';
import { useDinoStore } from '@/store/dinoStore';
import { PaginatedDinoGrid } from './PaginatedDinoGrid';

export function DinoDexContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [diet, setDiet] = useState('all');
  const [locomotion, setLocomotion] = useState('all');
  const { seenIds, getAllSeenIds } = useDinoStore();

  const filteredDinosaurs = useMemo(() => {
    const search = searchQuery.toLowerCase();
    const dietFilter = diet === 'all' ? '' : diet;
    const locomotionFilter = locomotion === 'all' ? '' : locomotion;

    return dinosaursData
      .filter((dino) => {
        const matchesSearch = dino.name.toLowerCase().includes(search);
        const matchesDiet = !dietFilter || dino.diet === dietFilter;
        const matchesLocomotion =
          !locomotionFilter || dino.locomotionType === locomotionFilter;

        return matchesSearch && matchesDiet && matchesLocomotion;
      })
      .map((dino) => ({
        ...dino,
        isUndiscovered: !seenIds.has(dino.id),
      }));
  }, [searchQuery, diet, locomotion, seenIds]);

  const discoveredCount = filteredDinosaurs.filter(
    (d) => !d.isUndiscovered,
  ).length;
  const undiscoveredCount = filteredDinosaurs.filter(
    (d) => d.isUndiscovered,
  ).length;

  const hasActiveFilters =
    searchQuery || diet !== 'all' || locomotion !== 'all';
  const totalSeenCount = getAllSeenIds().length;
  const progressPercentage = (totalSeenCount / dinosaursData.length) * 100;

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">
            DinoDex
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete encyclopedia of all dinosaur species
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-muted-foreground">
                {totalSeenCount} Discovered
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-gray-400" />
              <span className="text-muted-foreground">
                {dinosaursData.length - totalSeenCount} Undiscovered
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Discovery Progress</span>
              <span className="text-muted-foreground">
                {totalSeenCount} of {dinosaursData.length} dinosaurs discovered
              </span>
            </div>
            <Progress
              className="h-2 bg-green-500"
              value={progressPercentage}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar
              onChange={setSearchQuery}
              placeholder="Search dinosaurs..."
              value={searchQuery}
            />
            <FilterPanel
              diet={diet}
              locomotion={locomotion}
              onDietChange={setDiet}
              onLocomotionChange={setLocomotion}
            />
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mb-6">
            {filteredDinosaurs.length > 0 ? (
              <p className="text-sm text-muted-foreground">
                Found {filteredDinosaurs.length} dinosaur{filteredDinosaurs.length !== 1 ? 's' : ''}
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
