import { useMemo } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import type { Diet } from '@/types/Diet';
import type { Dinosaur } from '@/types/Dinosaur';
import type { Locomotion } from '@/types/Locomotion';

export function useFilteredDinosaurs(searchParams: {
  [key: string]: string | undefined;
}): Dinosaur[] {
  return useMemo(() => {
    const search = searchParams.search?.toLowerCase() || '';
    const cladeFilter = searchParams.clade;
    const dietFilter = searchParams.diet as Diet | undefined;
    const locomotionFilter = searchParams.locomotion as Locomotion | undefined;

    return dinosaurs.filter((dino) => {
      const matchesSearch = dino.name.toLowerCase().includes(search);
      const matchesClade =
        !cladeFilter || dino.classificationInfo.clade.includes(cladeFilter);
      const matchesDiet = !dietFilter || dino.diet === dietFilter;
      const matchesLocomotion =
        !locomotionFilter || dino.locomotionType === locomotionFilter;

      return matchesSearch && matchesClade && matchesDiet && matchesLocomotion;
    });
  }, [
    searchParams.search,
    searchParams.clade,
    searchParams.diet,
    searchParams.locomotion,
  ]);
}
