import Image from 'next/image';
import type { DinosaurImage } from '@/types/DinosaurImage';

type ImageSectionProps = {
  image?: DinosaurImage;
};

export function ImageSection({ image }: ImageSectionProps) {
  return (
    <section className="mt-12">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
        <div className="relative h-120 w-full">
          <Image
            alt={image?.title || ''}
            className="w-full h-auto object-fit"
            fill
            loading="eager"
            placeholder="empty"
            src={image?.imageURL || ''}
          />
        </div>
        <div className="space-y-3 p-6 text-sm text-gray-500 dark:text-gray-400">
          <p className="leading-relaxed">{image?.title}</p>
          <div className="pt-2 text-sm">
            <p>
              By{' '}
              {image?.authorURL ? (
                <>
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                    href={image.authorURL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {image?.author}
                  </a>{' '}
                  |{' '}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                    href={image?.licenseURL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {image?.license}
                  </a>
                </>
              ) : (
                <>
                  {image?.author} | {image?.license}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
