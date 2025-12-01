import { useMemo } from 'react';
import type { ClassificationInfo } from '@/types/ClassificationInfo';
import type {
  ClassInfo,
  FamilyInfo,
  GenusInfo,
  OrderInfo,
  SpeciesInfo,
  TribeInfo,
} from '@/types/Info';

type ClassificationItem = {
  label: string;
  value: string;
};

type UseClassificationTableReturn = {
  items: ClassificationItem[];
};

export function useClassificationTable(
  classificationInfo: ClassificationInfo,
): UseClassificationTableReturn {
  const items = useMemo(() => {
    const result: ClassificationItem[] = [];

    Object.entries(classificationInfo).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (key === 'clade') {
          result.push({
            label: 'Clade',
            value: value.join(', ') || '',
          });
        }
      } else if (value && typeof value === 'object' && 'value' in value) {
        switch (key) {
          case 'classInfo': {
            const classInfo = value as ClassInfo;
            result.push({
              label: classInfo.classType,
              value: classInfo.value,
            });
            break;
          }
          case 'orderInfo': {
            const orderInfo = value as OrderInfo;
            result.push({
              label: orderInfo.orderType,
              value: orderInfo.value,
            });
            break;
          }
          case 'familyInfo': {
            const familyInfo = value as FamilyInfo;
            result.push({
              label: familyInfo.familyType,
              value: familyInfo.value,
            });
            break;
          }
          case 'tribeInfo': {
            const tribeInfo = value as TribeInfo;
            result.push({
              label: tribeInfo.tribeType,
              value: tribeInfo.value,
            });
            break;
          }
          case 'genusInfo': {
            const genusInfo = value as GenusInfo;
            result.push({
              label: genusInfo.genusType,
              value: genusInfo.value,
            });
            break;
          }
          case 'speciesInfo': {
            const speciesInfo = value as SpeciesInfo;
            result.push({
              label: speciesInfo.speciesType,
              value: speciesInfo.value,
            });
            break;
          }
          default:
            return;
        }
      } else if (value && typeof value === 'string') {
        if (key === 'domain') return;

        const label = key.charAt(0).toUpperCase() + key.slice(1);
        result.push({
          label,
          value,
        });
      }
    });

    return result.filter((item) => item.value);
  }, [classificationInfo]);

  return {
    items,
  };
}
