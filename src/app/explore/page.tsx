import { ExploreContent } from '@/components/explore/ExploreContent';

export const metadata = {
  title: 'Explore Dinosaurs | Paleodra',
  description:
    'Uncover the fascinating world of dinosaurs! Browse and filter through our extensive collection of dinosaur species, exploring their habitats, characteristics, and more.',
};

export default async function ExplorePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-background/80 dark:from-text/10 dark:to-text/5">
      <ExploreContent />
    </div>
  );
}
