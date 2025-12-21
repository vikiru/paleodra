import type { ClassInfo, FamilyInfo, GenusInfo, OrderInfo, SpeciesInfo, TribeInfo } from '@/types/Info';

export type ClassificationInfo = {
  domain: string;
  kingdom: string;
  phylum: string;
  clade: string[];
  classInfo: ClassInfo[];
  orderInfo: OrderInfo[];
  familyInfo: FamilyInfo[];
  genusInfo: GenusInfo[];
  speciesInfo: SpeciesInfo[];
  tribeInfo: TribeInfo[];
  superphylum?: string;
  branch?: string;
};
