import StatsCard from '@/components/landing/StatsCard';

const STATS = [
  { value: '1,100+', label: 'Dinosaur Species' },
  { value: '240M+', label: 'Years of History' },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-oklch(var(--secondary)/0.05)">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STATS.map((stat) => (
              <StatsCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
