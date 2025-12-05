import { memo } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type LocomotionFilterProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const LOCOMOTION_OPTIONS = [
  'biped',
  'quadruped',
  'swimming',
  'flying',
  'gliding',
];

export function LocomotionFilter({ 
  value = '', 
  onChange 
}: LocomotionFilterProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="All Locomotion" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Locomotion</SelectItem>
        {LOCOMOTION_OPTIONS.map((option) => (
          <SelectItem key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default memo(LocomotionFilter);
