import { FilterPanel } from '@/components/search/FilterPanel';
import { SearchBar } from '@/components/search/SearchBar';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';

type SearchFiltersProps = {
  searchParams: { [key: string]: string | undefined };
};

export function SearchFilters({ searchParams }: SearchFiltersProps) {
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
  } = useDinosaurFilters(initialState);

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchBar
        placeholder="Search for a dinosaur..."
        value={filterState.searchQuery}
        onChange={setSearchQuery}
      />
      <FilterPanel
        diet={filterState.diet}
        locomotion={filterState.locomotion}
        onDietChange={setDiet}
        onLocomotionChange={setLocomotion}
      />
    </div>
  );
}

