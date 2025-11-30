import { fetchData } from '@/lib/utils/fetchData';
import { checkFileExists, readFile } from '@/lib/utils/readFile';
import { writeData } from '@/lib/utils/writeData';
import type { Dinosaur } from '@/types/Dinosaur';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';
import type { SearchIndex } from '@/types/SearchIndex';

function processDinosaurData(dinos: Dinosaur[]) {
  const sortedDinos: Dinosaur[] = dinos.sort((a, b) => a.id - b.id);
  const searchIndex: SearchIndex[] = [];
  const dinoMetadata: DinosaurMetadata[] = [];

  sortedDinos.forEach((dino) => {
    searchIndex.push({
      id: dino.id,
      name: dino.name,
    });

    dinoMetadata.push({
      id: dino.id,
      name: dino.name,
      temporalRange: dino.temporalRange,
      diet: dino.diet,
      locomotionType: dino.locomotionType,
      imageUrl: dino.image.imageURL,
    });
  });

  return { sortedDinos, searchIndex, dinoMetadata };
}

async function main() {
  const filesExist: boolean[] = await Promise.all([
    checkFileExists('dinosaurs.json'),
    checkFileExists('searchIndex.json'),
    checkFileExists('dinoMetadata.json'),
  ]);

  const mainDataFileExists = filesExist[0];
  const searchIndexFileExists = filesExist[1];
  const dinoMetadataFileExists = filesExist[2];

  if (mainDataFileExists && searchIndexFileExists && dinoMetadataFileExists) {
    console.log('All data files exist. Skipping fetch of data.');
    return;
  }

  let sortedDinos: Dinosaur[];
  let searchIndex: SearchIndex[];
  let dinoMetadata: DinosaurMetadata[];

  if (
    mainDataFileExists &&
    (!searchIndexFileExists || !dinoMetadataFileExists)
  ) {
    console.log(
      'Main dinosaur data file exists, but search index and metadata files are missing. Processing and creating now...',
    );
    const dinosaurs = await readFile<Dinosaur[]>('dinosaurs.json');
    if (!dinosaurs) {
      console.error('Failed to read dinosaurs data');
      return;
    }
    const processed = processDinosaurData(dinosaurs);
    sortedDinos = processed.sortedDinos;
    searchIndex = processed.searchIndex;
    dinoMetadata = processed.dinoMetadata;
  } else {
    console.log('Fetching dinosaur data from API...');
    const dinos: Dinosaur[] = await fetchData();
    console.log('Finished fetching dinosaur data from API.');
    const processed = processDinosaurData(dinos);
    sortedDinos = processed.sortedDinos;
    searchIndex = processed.searchIndex;
    dinoMetadata = processed.dinoMetadata;
  }

  console.log('Writing data to files...');
  await writeData<Dinosaur[]>(sortedDinos, 'dinosaurs.json');

  if (!searchIndexFileExists) {
    await writeData<SearchIndex[]>(searchIndex, 'searchIndex.json');
  }

  if (!dinoMetadataFileExists) {
    await writeData<DinosaurMetadata[]>(dinoMetadata, 'dinoMetadata.json');
  }

  console.log('Finished writing data to files.');
}

main();
