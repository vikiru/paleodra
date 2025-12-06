import { memo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FilterDropdownProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: string[];
  placeholder: string;
  allLabel: string;
};

export function FilterDropdown({
  value = '',
  onChange,
  options,
  placeholder,
  allLabel,
}: FilterDropdownProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{allLabel}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default memo(FilterDropdown);
