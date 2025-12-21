import { useMemo } from 'react';
import dinoMetadata from '@/data/dinoMetadata.json';
import { useStaticSearch } from '@/hooks/useStaticSearch';
import { useSearchStore } from '@/store/searchStore';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

const dinosaursData = dinoMetadata as unknown as DinosaurMetadata[];

type DinosaurFilterData = {
  filteredDinosaurs: DinosaurMetadata[];
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
      dinosaurIds = dinosaursData.map((dino: DinosaurMetadata) => dino.id);
    }

    const filteredById = dinosaursData.filter((dino: DinosaurMetadata) => dinosaurIds.includes(dino.id));

    return filteredById.filter((dino: DinosaurMetadata) => {
      const matchesDiet = dietFilter ? dino.diet === dietFilter : true;
      const matchesLocomotion = locomotionFilter ? dino.locomotionType === locomotionFilter : true;
      return matchesDiet && matchesLocomotion;
    });
  }, [searchQuery, diet, locomotion, searchDinosaur]);

  return { filteredDinosaurs, isLoading };
}
