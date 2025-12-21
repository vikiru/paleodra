import { DinoDexContent } from '@/components/dinodex/DinoDexContent';

export const metadata = {
  title: 'DinoDex | Paleodra',
  description: 'Complete encyclopedia of all dinosaur species in our comprehensive database.',
};

export default function DinoDexPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-background/80 dark:from-text/10 dark:to-text/5">
      <DinoDexContent />
    </div>
  );
}
