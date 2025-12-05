import { FilterPanel } from '@/components/search/FilterPanel';
import { SearchBar } from '@/components/search/SearchBar';
import { useDinoDexFilters } from '@/hooks/useDinoDexFilters';

export function DinoSearchControls() {
  const {
    filterState,
    setSearchQuery,
    setDiet,
    setLocomotion,
  } = useDinoDexFilters();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchBar
        onChange={setSearchQuery}
        placeholder="Search dinosaurs..."
        value={filterState.searchQuery}
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
