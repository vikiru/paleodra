import type { Dinosaur } from '@/types/Dinosaur';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';
import type { SearchIndex } from '@/types/SearchIndex';

export function processDinosaurData(dinos: Dinosaur[]) {
  const sortedDinos: Dinosaur[] = dinos.sort((a, b) => a.id - b.id);
  const dinoMetadata: DinosaurMetadata[] = [];
  const searchIndex: SearchIndex[] = [];

  sortedDinos.forEach((dino) => {
    searchIndex.push({
      id: dino.id,
      name: dino.name,
    });

    const imageUrl = dino.image?.imageURL || '';

    dinoMetadata.push({
      id: dino.id,
      name: dino.name,
      temporalRange: dino.temporalRange,
      diet: dino.diet,
      locomotionType: dino.locomotionType,
      imageURL: imageUrl,
    });
  });

  return {
    sortedDinos,
    searchIndex,
    dinoMetadata,
  };
}
