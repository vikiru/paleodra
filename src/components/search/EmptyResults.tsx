import { Search } from 'lucide-react';
import { memo } from 'react';

type EmptyResultsProps = {
  message?: string;
  className?: string;
};

export function EmptyResults({
  message = 'No dinosaurs found for your search criteria',
  className = '',
}: EmptyResultsProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
    >
      <Search className="h-16 w-16 text-muted-foreground/50 mb-4" />
      <h3 className="text-lg font-semibold text-muted-foreground mb-2">
        No Results Found
      </h3>
      <p className="text-sm text-muted-foreground max-w-md">{message}</p>
    </div>
  );
}

export default memo(EmptyResults);
