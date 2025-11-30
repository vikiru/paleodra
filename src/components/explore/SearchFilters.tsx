import { FilterPanel } from '../search/FilterPanel';
import { SearchBar } from '../search/SearchBar';

type SearchFiltersProps = {
  searchParams: { [key: string]: string | undefined };
};

export function SearchFilters({ searchParams }: SearchFiltersProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchBar
        placeholder="Search for a dinosaur..."
        value={searchParams.search || ''}
      />
      <FilterPanel
        diet={searchParams.diet || 'all'}
        locomotion={searchParams.locomotion || 'all'}
      />
    </div>
  );
}
