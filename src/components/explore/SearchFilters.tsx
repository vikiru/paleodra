import { FilterPanel as FilterPanelComponent } from '@/components/search/FilterPanel';
import { SearchBar as SearchBarComponent } from '@/components/search/SearchBar';
import { useSearchStore } from '@/store/searchStore';

export function SearchFilters() {
  const {
    searchQuery,
    diet,
    locomotion,
    isLoading,
    setSearchQuery,
    setDiet,
    setLocomotion,
  } = useSearchStore();

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchBarComponent
        disabled={isLoading}
        onChange={setSearchQuery}
        placeholder="Search for a dinosaur..."
        value={searchQuery}
      />
      <FilterPanelComponent
        diet={diet}
        disabled={isLoading}
        locomotion={locomotion}
        onDietChange={setDiet}
        onLocomotionChange={setLocomotion}
      />
    </div>
  );
}
