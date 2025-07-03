import { ClassificationInfo } from '@/types/ClassificationInfo';
import { DinosaurImage } from '@/types/DinosaurImage';
import { DinosaurSource } from '@/types/DinosaurSource';
import { Diet } from '@/types/Diet';
import { Locomotion } from '@/types/Locomotion';

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
