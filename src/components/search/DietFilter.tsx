import { memo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type DietFilterProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

const DIET_OPTIONS = ['carnivore', 'herbivore', 'omnivore', 'piscivore'];

export const DietFilter = memo(function DietFilter({
  value = '',
  onChange,
  className = '',
  disabled = false,
}: DietFilterProps) {
  return (
    <Select disabled={disabled} onValueChange={onChange} value={value}>
      <SelectTrigger className={`w-40 ${className}`}>
        <SelectValue placeholder="All Diets" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Diets</SelectItem>
        {DIET_OPTIONS.map((option) => (
          <SelectItem key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
