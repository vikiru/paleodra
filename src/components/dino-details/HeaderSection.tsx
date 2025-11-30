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
      <div className="flex flex-wrap items-center gap-3">
        <span className="capitalize inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 ring-1 ring-primary-200 dark:bg-primary-900/80 dark:text-primary-100 dark:ring-primary-700">
          <Utensils className="mr-1.5 h-4 w-4" />
          {diet}
        </span>
        <span className="capitalize inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 ring-1 ring-primary-200 dark:bg-primary-900/80 dark:text-primary-100 dark:ring-primary-700">
          <Footprints className="mr-1.5 h-4 w-4" />
          {locomotionType}
        </span>
        <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600">
          <Clock aria-hidden="true" className="mr-1.5 h-4 w-4 text-amber-500" />
          {temporalRange}
        </span>
      </div>
    </section>
  );
}
