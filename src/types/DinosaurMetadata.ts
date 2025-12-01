import type { Dinosaur } from '@/types/Dinosaur';

export type DinosaurMetadata = Pick<
  Dinosaur,
  'id' | 'name' | 'temporalRange' | 'diet' | 'locomotionType'
> & {
  imageURL: string;
};
