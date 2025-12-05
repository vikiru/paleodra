import { EmptyResults } from '@/components/search/EmptyResults';
import { useDinosaurFilters } from '@/hooks/useDinosaurFilters';

type ExploreResultsInfoProps = {
  searchParams: { [key: string]: string | undefined };
};

export function ExploreResultsInfo({ searchParams }: ExploreResultsInfoProps) {
  const initialState = {
    searchQuery: searchParams.search || '',
    diet: searchParams.diet || 'all',
    locomotion: searchParams.locomotion || 'all',
  };

  const { filteredDinosaurs, hasActiveFilters } = useDinosaurFilters(initialState);

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
