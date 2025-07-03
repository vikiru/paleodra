import type { ClassificationInfo } from '@/types/ClassificationInfo';
import type { Diet } from '@/types/Diet';
import type { DinosaurImage } from '@/types/DinosaurImage';
import type { DinosaurSource } from '@/types/DinosaurSource';
import type { Locomotion } from '@/types/Locomotion';

export type Dinosaur = {
    name: string;
    temporalRange: string;
    diet: Diet;
    classificationInfo: ClassificationInfo;
    locomotionType: Locomotion;
    description: string;
    image: DinosaurImage;
    source: DinosaurSource;
};
