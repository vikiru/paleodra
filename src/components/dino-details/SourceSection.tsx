import type { DinosaurSource } from '@/types/DinosaurSource';

type SourceSectionProps = {
  source?: DinosaurSource;
};

export function SourceSection({ source }: SourceSectionProps) {
  return (
    <section className="space-y-6 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50 mt-12">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Source & Attribution
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          This content is from the article "{source?.pageTitle}" on Wikipedia,
          used under the {source?.license}. The original article can be found
          at:{' '}
          <a
            className="font-medium text-primary-600 hover:underline dark:text-primary-400"
            href={source?.wikipediaURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {source?.wikipediaURL}
          </a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content is available under {source?.license} unless otherwise noted.
        </p>
      </div>
    </section>
  );
}
