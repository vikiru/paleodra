import { useMemo } from 'react';
import type { ClassificationInfo } from '@/types/ClassificationInfo';

const CLASSIFICATION_ORDER = [
  { key: 'domain', label: 'Domain' },
  { key: 'kingdom', label: 'Kingdom' },
  { key: 'superphylum', label: 'Superphylum' },
  { key: 'phylum', label: 'Phylum' },
  { key: 'classInfo', label: 'Class' },
  { key: 'clade', label: 'Clade' },
  { key: 'orderInfo', label: 'Order' },
  { key: 'familyInfo', label: 'Family' },
  { key: 'tribeInfo', label: 'Tribe' },
  { key: 'genusInfo', label: 'Genus' },
  { key: 'speciesInfo', label: 'Species' },
] as const;

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

    CLASSIFICATION_ORDER.forEach(({ key, label }) => {
      if (key === 'clade') {
        if (classificationInfo.clade.length > 0) {
          classificationInfo.clade.forEach((cladeName) => {
            result.push({
              label: 'Clade',
              value: cladeName,
            });
          });
        }
      } else if (
        key === 'domain' ||
        key === 'kingdom' ||
        key === 'superphylum' ||
        key === 'phylum'
      ) {
        const data = classificationInfo[key];
        if (data) {
          result.push({
            label,
            value: data,
          });
        }
      } else {
        const data = classificationInfo[key];
        if (data && data.length > 0 && data[0]?.value) {
          const typeKey =
            `${key.replace('Info', 'Type')}` as keyof (typeof data)[0];
          result.push({
            label: data[0][typeKey] as string,
            value: data[0].value,
          });
        }
      }
    });

    return result.filter((item) => item.value);
  }, [classificationInfo]);

  return {
    items,
  };
}
