import { EmptyResults } from '@/components/search/EmptyResults';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';
import { useSearchStore } from '@/store/searchStore';

export function ExploreResultsInfo() {
  const { filteredDinosaurs } = useDinosaurFilters();
  const { searchQuery, diet, locomotion } = useSearchStore();

  const hasActiveFilters =
    searchQuery !== '' || diet !== 'all' || locomotion !== 'all';

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6">
      {filteredDinosaurs.length > 0 ? (
        <p className="text-sm text-muted-foreground">
          Found {filteredDinosaurs.length} dinosaur
          {filteredDinosaurs.length !== 1 ? 's' : ''}
        </p>
      ) : (
        <EmptyResults message="No dinosaurs match your search and filter criteria" />
      )}
    </div>
  );
}
