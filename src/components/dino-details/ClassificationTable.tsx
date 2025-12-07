import { memo } from 'react';
import { useClassificationTable } from '@/hooks/useClassificationTable';
import type { ClassificationInfo } from '@/types/ClassificationInfo';

type ClassificationTableProps = {
  classificationInfo: ClassificationInfo;
};

export const ClassificationTable = memo(function ClassificationTable({
  classificationInfo,
}: ClassificationTableProps) {
  const { items } = useClassificationTable(classificationInfo);

  return (
    <section
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
      id="classification-table"
    >
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
        {items.map((item) => (
          <div
            className="grid grid-cols-3"
            id={`item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            key={`${item.label}-${item.value}`}
          >
            <div className="bg-gray-50 px-4 py-3.5 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-200 sm:px-6">
              {item.label}
            </div>
            <div className="col-span-2 px-4 py-3.5 text-sm font-medium text-gray-900 dark:text-gray-50 sm:px-6">
              {item.label.toLowerCase().includes('genus') ||
              item.label.toLowerCase().includes('species') ? (
                <span className="italic">{item.value}</span>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
