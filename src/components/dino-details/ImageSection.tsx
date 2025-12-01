import Image from 'next/image';
import type { DinosaurImage } from '@/types/DinosaurImage';

type ImageSectionProps = {
  image?: DinosaurImage;
};

export function ImageSection({ image }: ImageSectionProps) {
  return (
    <section className="mt-12">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
        <div className="relative w-full aspect-4/3 max-h-120 ">
          <Image
            alt={image?.title || ''}
            className="object-cover"
            fill
            loading="eager"
            src={image?.imageURL || ''}
          />
        </div>
        <div className="space-y-3 p-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="pt-2 text-sm">
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                "{image?.title}"
              </span>{' '}
              by{' '}
              {image?.authorURL ? (
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  href={image.authorURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {image?.author}
                </a>
              ) : (
                <span className="font-medium">{image?.author}</span>
              )}{' '}
              is licensed under{' '}
              {image?.licenseURL ? (
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  href={image?.licenseURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {image?.license}
                </a>
              ) : (
                <span className="font-medium">{image?.license}</span>
              )}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
