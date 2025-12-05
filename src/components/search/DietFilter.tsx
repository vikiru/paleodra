import { memo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type DietFilterProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const DIET_OPTIONS = ['carnivore', 'herbivore', 'omnivore', 'piscivore'];

export function DietFilter({ 
  value = '', 
  onChange 
}: DietFilterProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-40">
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
}

export default memo(DietFilter);
