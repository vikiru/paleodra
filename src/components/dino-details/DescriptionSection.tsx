type DescriptionSectionProps = {
  description: string;
};

export function DescriptionSection({ description }: DescriptionSectionProps) {
  return (
    <section
      className="prose prose-gray max-w-none space-y-6 dark:prose-invert dark:prose-headings:text-white mt-12"
      id="description-section"
    >
      <div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Description</h2>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </section>
  );
}
