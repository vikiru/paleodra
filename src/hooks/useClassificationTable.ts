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

type ClassificationTableData = {
  items: ClassificationItem[];
};

export function useClassificationTable(
  classificationInfo: ClassificationInfo,
): ClassificationTableData {
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
            const classInfo = value as unknown as ClassInfo;
            result.push({
              label: classInfo[0].classType,
              value: classInfo[0].value,
            });
            break;
          }
          case 'orderInfo': {
            const orderInfo = value as unknown as OrderInfo;
            result.push({
              label: orderInfo[0].orderType,
              value: orderInfo[0].value,
            });
            break;
          }
          case 'familyInfo': {
            const familyInfo = value as unknown as FamilyInfo;
            result.push({
              label: familyInfo[0].familyType,
              value: familyInfo[0].value,
            });
            break;
          }
          case 'tribeInfo': {
            const tribeInfo = value as unknown as TribeInfo;
            result.push({
              label: tribeInfo[0].tribeType,
              value: tribeInfo[0].value,
            });
            break;
          }
          case 'genusInfo': {
            const genusInfo = value as unknown as GenusInfo;
            result.push({
              label: genusInfo[0].genusType,
              value: genusInfo[0].value,
            });
            break;
          }
          case 'speciesInfo': {
            const speciesInfo = value as unknown as SpeciesInfo;
            result.push({
              label: speciesInfo[0].speciesType,
              value: speciesInfo[0].value,
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
