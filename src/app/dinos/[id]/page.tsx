import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ClassificationSection } from '@/components/dino-details/ClassificationSection';
import { DescriptionSection } from '@/components/dino-details/DescriptionSection';
import { DinoDetails } from '@/components/dino-details/DinoDetails';
import { HeaderSection } from '@/components/dino-details/HeaderSection';
import { ImageSection } from '@/components/dino-details/ImageSection';
import { SourceSection } from '@/components/dino-details/SourceSection';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const dinosaurs = await import('@/data/dinosaurs.json');
  return dinosaurs.default.map((dino) => ({
    id: dino.id.toString(),
  }));
}

async function getDinosaurData(id: string) {
  const dinosaurs = await import('@/data/dinosaurs.json');
  const dino = dinosaurs.default[parseInt(id, 10) - 1];
  return dino || null;
}

export default async function DinoPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const dino = await getDinosaurData(id);

  if (!dino) {
    notFound();
  }

  return (
    <DinoDetails dinoId={parseInt(id, 10)}>
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
          <div className="w-full">
            <Button asChild className="mb-8" variant="ghost">
              <Link href="/dino-dex">← Back to DinoDex</Link>
            </Button>
          </div>

          <HeaderSection dino={dino} />
          <ImageSection image={dino.image} />
          <DescriptionSection description={dino.description} />
          <ClassificationSection classificationInfo={dino.classificationInfo} />
          <SourceSection source={dino.source} />
        </div>
      </div>
    </DinoDetails>
  );
}
