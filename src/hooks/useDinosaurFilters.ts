import { useMemo } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import { useStaticSearch } from '@/hooks/useStaticSearch';
import { useSearchStore } from '@/store/searchStore';
import type { Dinosaur } from '@/types/Dinosaur';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

type DinosaurFilterData = {
  filteredDinosaurs: Dinosaur[];
  isLoading: boolean;
};

export function useDinosaurFilters(): DinosaurFilterData {
  const { searchQuery, diet, locomotion } = useSearchStore();
  const { searchDinosaur, isLoading } = useStaticSearch();

  const filteredDinosaurs = useMemo(() => {
    const dietFilter = diet === 'all' ? '' : diet;
    const locomotionFilter = locomotion === 'all' ? '' : locomotion;

    let dinosaurIds: number[];

    if (searchQuery.trim()) {
      dinosaurIds = searchDinosaur(searchQuery);
    } else {
      dinosaurIds = dinosaursData.map((dino: Dinosaur) => dino.id);
    }

    const filteredById = dinosaursData.filter((dino: Dinosaur) =>
      dinosaurIds.includes(dino.id),
    );

    return filteredById.filter((dino: Dinosaur) => {
      const matchesDiet = dietFilter ? dino.diet === dietFilter : true;
      const matchesLocomotion = locomotionFilter
        ? dino.locomotionType === locomotionFilter
        : true;
      return matchesDiet && matchesLocomotion;
    });
  }, [searchQuery, diet, locomotion, searchDinosaur]);

  return { filteredDinosaurs, isLoading };
}
