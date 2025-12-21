import FeaturesCard from '@/components/landing/FeaturesCard';

const FEATURES = [
  {
    title: 'Detailed Profiles',
    description: 'Comprehensive information on 1,100+ dinosaur species',
    icon: '📄',
  },
  {
    title: 'Dino Dex',
    description: 'Interactively track your exploration on these species',
    icon: '📱',
  },
  {
    title: 'Search Dinosaurs',
    description: 'Quickly find and explore any dinosaur species by name, diet, or locomotion',
    icon: '🔍',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:text-4xl">
            Explore the Age of Dinosaurs
          </h2>
          <p className="mb-12 text-lg text-oklch(var(--text)/0.8)">
            From the mighty T-Rex to the gentle Brachiosaurus, discover the incredible diversity of these ancient
            creatures.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeaturesCard
                description={feature.description}
                icon={feature.icon}
                key={feature.title}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
