import { memo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type FilterDropdownProps<T extends string> = {
  options: T[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder: string;
  allLabel: string;
};

export const FilterDropdown = memo(function FilterDropdown({
  value,
  onChange,
  options,
  placeholder,
  allLabel,
}: FilterDropdownProps<string>) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{allLabel}</SelectItem>
        {options.map((option: string) => (
          <SelectItem key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
});
