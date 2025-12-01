import type { DinosaurSource } from '@/types/DinosaurSource';

type SourceSectionProps = {
  source: DinosaurSource;
};

export function SourceSection({ source }: SourceSectionProps) {
  return (
    <section className="space-y-6 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50 mt-12">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Source & Attribution
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          This page content is from the Wikipedia article{' '}
          <a
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            href={source.wikipediaURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            "{source.pageTitle}"
          </a>
          , which is released under the{' '}
          <a
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            href={source.licenseURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {source.license}
          </a>
          .
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content is available under {source.license} unless otherwise noted.
        </p>
      </div>
    </section>
  );
}
