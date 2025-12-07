import { FilterPanel } from '@/components/search/FilterPanel';
import { SearchBar } from '@/components/search/SearchBar';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useSearchStore } from '@/store/searchStore';

export function SearchFilters() {
  const isMounted = useIsMounted();
  const {
    searchQuery,
    diet,
    locomotion,
    setSearchQuery,
    setDiet,
    setLocomotion,
  } = useSearchStore();

  return (
    <section
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      id="search-filters"
    >
      <SearchBar
        disabled={!isMounted}
        onChange={setSearchQuery}
        placeholder="Search for a dinosaur..."
        value={searchQuery}
      />
      <FilterPanel
        diet={diet}
        disabled={!isMounted}
        locomotion={locomotion}
        onDietChange={setDiet}
        onLocomotionChange={setLocomotion}
      />
    </section>
  );
}
