import type { ClassificationInfo } from '@/types/ClassificationInfo';
import { ClassificationTable } from './ClassificationTable';

type ClassificationSectionProps = {
  classificationInfo: ClassificationInfo;
};

export function ClassificationSection({
  classificationInfo,
}: ClassificationSectionProps) {
  return (
    <section className="space-y-6 mt-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Classification
      </h2>
      <ClassificationTable classificationInfo={classificationInfo} />
    </section>
  );
}
