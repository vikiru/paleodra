'use client';

import { memo } from 'react';
import { DietFilter } from './DietFilter';
import { LocomotionFilter } from './LocomotionFilter';

type FilterPanelProps = {
  diet?: string;
  locomotion?: string;
  onDietChange?: (value: string) => void;
  onLocomotionChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

export const FilterPanel = memo(function FilterPanel({
  diet = '',
  locomotion = '',
  onDietChange,
  onLocomotionChange,
  className = '',
  disabled = false,
}: FilterPanelProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <DietFilter disabled={disabled} onChange={onDietChange} value={diet} />
      <LocomotionFilter
        disabled={disabled}
        onChange={onLocomotionChange}
        value={locomotion}
      />
    </div>
  );
});
