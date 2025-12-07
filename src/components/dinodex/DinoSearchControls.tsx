import { FilterPanel } from '@/components/search/FilterPanel';
import { SearchBar } from '@/components/search/SearchBar';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useSearchStore } from '@/store/searchStore';

export function DinoSearchControls() {
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
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
    </div>
  );
}
