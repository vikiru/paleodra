'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterPanelProps {
  diet?: string;
  locomotion?: string;
  onDietChange?: (value: string) => void;
  onLocomotionChange?: (value: string) => void;
  className?: string;
}

const DIET_OPTIONS = ['carnivore', 'herbivore', 'omnivore', 'piscivore'];
const LOCOMOTION_OPTIONS = [
  'biped',
  'quadruped',
  'swimming',
  'flying',
  'gliding',
];

export function FilterPanel({
  diet = '',
  locomotion = '',
  onDietChange,
  onLocomotionChange,
  className = '',
}: FilterPanelProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Select onValueChange={onDietChange} value={diet}>
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

      <Select onValueChange={onLocomotionChange} value={locomotion}>
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
    </div>
  );
}
