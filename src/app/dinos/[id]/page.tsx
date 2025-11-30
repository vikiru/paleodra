import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ClassificationSection } from '@/components/dino-details/ClassificationSection';
import { DescriptionSection } from '@/components/dino-details/DescriptionSection';
import { DinoDetails } from '@/components/dino-details/DinoDetails';
import { HeaderSection } from '@/components/dino-details/HeaderSection';
import { ImageSection } from '@/components/dino-details/ImageSection';
import { SourceSection } from '@/components/dino-details/SourceSection';
import type { ClassificationInfo } from '@/types/ClassificationInfo';
import type { Diet } from '@/types/Diet';
import type { Locomotion } from '@/types/Locomotion';

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
            <Link
              className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
              href="/dino-dex"
            >
              ← Back to DinoDex
            </Link>
          </div>

          <HeaderSection
            diet={dino.diet as Diet}
            locomotionType={dino.locomotionType as Locomotion}
            name={dino.name}
            temporalRange={dino.temporalRange || 'Unknown'}
          />

          <ImageSection image={dino.image} />

          <DescriptionSection description={dino.description} />

          <ClassificationSection
            classificationInfo={
              dino.classificationInfo as unknown as ClassificationInfo
            }
          />

          <SourceSection source={dino.source} />
        </div>
      </div>
    </DinoDetails>
  );
}
