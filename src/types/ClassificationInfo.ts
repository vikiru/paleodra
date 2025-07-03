import {
    ClassInfo,
    FamilyInfo,
    GenusInfo,
    SpeciesInfo,
    OrderInfo,
} from '@/types/Info';

export type ClassificationInfo = {
    domain: string;
    kingdom: string;
    phylum: string;
    clade: string[];
    classInfo: ClassInfo;
    orderInfo: OrderInfo;
    familyInfo: FamilyInfo;
    genusInfo: GenusInfo;
    speciesInfo: SpeciesInfo;
};
