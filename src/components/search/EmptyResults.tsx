import { Search } from 'lucide-react';
import { memo } from 'react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';

type EmptyResultsProps = {
  message?: string;
  className?: string;
};

export const EmptyResults = memo(function EmptyResults({
  message = 'No dinosaurs found for your search criteria',
  className = '',
}: EmptyResultsProps) {
  return (
    <Empty className={className}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search className="size-6" />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyContent>
        <EmptyTitle>No Results Found</EmptyTitle>
        <EmptyDescription>{message}</EmptyDescription>
      </EmptyContent>
    </Empty>
  );
});
