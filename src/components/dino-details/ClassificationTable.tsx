import { useClassificationTable } from '@/hooks/useClassificationTable';
import type { ClassificationInfo } from '@/types/ClassificationInfo';

type ClassificationTableProps = {
  classificationInfo: ClassificationInfo;
};

export function ClassificationTable({
  classificationInfo,
}: ClassificationTableProps) {
  const { items } = useClassificationTable(classificationInfo);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item) => (
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
