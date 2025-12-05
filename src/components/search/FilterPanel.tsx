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
};

export function FilterPanel({
  diet = '',
  locomotion = '',
  onDietChange,
  onLocomotionChange,
  className = '',
}: FilterPanelProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <DietFilter value={diet} onChange={onDietChange} />
      <LocomotionFilter value={locomotion} onChange={onLocomotionChange} />
    </div>
  );
}

export default memo(FilterPanel);
