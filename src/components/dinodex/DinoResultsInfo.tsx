import { EmptyResults } from '@/components/search/EmptyResults';
import { useDinoDexFilters } from '@/hooks/useDinoDexFilters';

export function DinoResultsInfo() {
  const { filteredDinosaurs, hasActiveFilters } = useDinoDexFilters();

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-6">
      {filteredDinosaurs.length > 0 ? (
        <p className="text-sm text-muted-foreground">
          Found {filteredDinosaurs.length} dinosaur{filteredDinosaurs.length !== 1 ? 's' : ''}
        </p>
      ) : (
        <EmptyResults message="No dinosaurs match your search and filter criteria" />
      )}
    </div>
  );
}
