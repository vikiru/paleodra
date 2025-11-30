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

type ClassificationTableProps = {
  classificationInfo: ClassificationInfo;
};

export function ClassificationTable({
  classificationInfo,
}: ClassificationTableProps) {
  const filteredItems = useMemo(() => {
    const items: ClassificationItem[] = [];

    Object.entries(classificationInfo).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Handle clade array (special case)
        if (key === 'clade') {
          items.push({
            label: 'Clade',
            value: value.join(', ') || '',
          });
        }
      } else if (value && typeof value === 'object' && 'value' in value) {
        // Handle single info objects
        switch (key) {
          case 'classInfo': {
            const classInfo = value as ClassInfo;
            items.push({
              label: classInfo.classType,
              value: classInfo.value,
            });
            break;
          }
          case 'orderInfo': {
            const orderInfo = value as OrderInfo;
            items.push({
              label: orderInfo.orderType,
              value: orderInfo.value,
            });
            break;
          }
          case 'familyInfo': {
            const familyInfo = value as FamilyInfo;
            items.push({
              label: familyInfo.familyType,
              value: familyInfo.value,
            });
            break;
          }
          case 'tribeInfo': {
            const tribeInfo = value as TribeInfo;
            items.push({
              label: tribeInfo.tribeType,
              value: tribeInfo.value,
            });
            break;
          }
          case 'genusInfo': {
            const genusInfo = value as GenusInfo;
            items.push({
              label: genusInfo.genusType,
              value: genusInfo.value,
            });
            break;
          }
          case 'speciesInfo': {
            const speciesInfo = value as SpeciesInfo;
            items.push({
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
        items.push({
          label,
          value,
        });
      }
    });

    return items.filter((item) => item.value);
  }, [classificationInfo]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
        {filteredItems.map((item) => (
          <div className="grid grid-cols-3" key={`${item.label}-${item.value}`}>
            <div className="bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-300 sm:px-6">
              {item.label}
            </div>
            <div className="col-span-2 px-4 py-3.5 text-sm text-gray-900 dark:text-gray-100 sm:px-6">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
