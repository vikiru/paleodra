import { Clock, Footprints, Utensils } from 'lucide-react';
import type { Diet } from '@/types/Diet';
import type { Locomotion } from '@/types/Locomotion';

type HeaderSectionProps = {
  name: string;
  diet: Diet;
  locomotionType: Locomotion;
  temporalRange: string;
};

export function HeaderSection({
  name,
  diet,
  locomotionType,
  temporalRange,
}: HeaderSectionProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        {name}
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-background px-3 py-1.5 text-sm font-medium ring-1 ring-border capitalize">
          <Utensils className="mr-1.5 h-4 w-4" />
          {diet}
        </span>
        <span className="inline-flex items-center rounded-full bg-background px-3 py-1.5 text-sm font-medium ring-1 ring-border capitalize">
          <Footprints className="mr-1.5 h-4 w-4" />
          {locomotionType}
        </span>
        <span className="inline-flex items-center rounded-full bg-background px-3 py-1.5 text-sm font-medium ring-1 ring-border">
          <Clock aria-hidden="true" className="mr-1.5 h-4 w-4 text-amber-500" />
          {temporalRange}
        </span>
      </div>
    </section>
  );
}
