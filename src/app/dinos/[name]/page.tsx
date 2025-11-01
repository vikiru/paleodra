import Link from 'next/link';

type DinoDetails = {
    id: number;
    name: string;
    temporalRange: string;
    diet: string;
    locomotionType: string;
    description: string;
    classificationInfo: {
        domain: string;
        kingdom: string;
        phylum: string;
        clade: string[];
        familyInfo: Array<{
            familyType: string;
            value: string;
        }>;
        genusInfo: Array<{
            genusType: string;
            value: string;
        }>;
    };
    image: {
        title: string;
        description: string;
        author: string;
        authorURL: string;
        imageURL: string;
        license: string;
        licenseURL: string;
    };
    source: {
        pageTitle: string;
        author: string;
        wikipediaURL: string;
        license: string;
        licenseURL: string;
    };
};

const getDinoData = async (name: string): Promise<DinoDetails> => {
    return {
        id: 1118,
        name: 'Zephyrosaurus',
        temporalRange: 'Early Cretaceous, ~113 Ma',
        diet: 'herbivore',
        locomotionType: 'biped',
        description:
            'Zephyrosaurus (meaning "westward wind lizard") is a genus of orodromine ornithischian dinosaur. It is based on a partial skull and postcranial fragments discovered in the Aptian-Albian-age Lower Cretaceous Cloverly Formation of Carbon County, Montana, USA. New remains are under description, and tracks from Maryland and Virginia, also in the US, have been attributed to animals similar to Zephyrosaurus. It lived approximately 113 mya.',
        classificationInfo: {
            domain: 'Eukaryota',
            kingdom: 'Animalia',
            phylum: 'Chordata',
            clade: ['Dinosauria', 'Ornithischia'],
            familyInfo: [
                { familyType: 'Family', value: 'Thescelosauridae' },
                { familyType: 'Subfamily', value: 'Orodrominae' },
            ],
            genusInfo: [{ genusType: 'Genus', value: 'Zephyrosaurus' }],
        },
        image: {
            title: 'Zephyrosaurus in Copenhagen',
            description:
                'Zephyrosaurus skeleton, Natural History Museum of Denmark, Copenhagen.',
            author: 'FunkMonk',
            authorURL: 'https://commons.wikimedia.org/wiki/User:FunkMonk',
            imageURL:
                'https://upload.wikimedia.org/wikipedia/commons/7/76/Zephyrosaurus_in_Copenhagen.jpg',
            license: 'Creative Commons Attribution-Share Alike 3.0',
            licenseURL: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
        source: {
            pageTitle: 'Zephyrosaurus',
            author: 'Wikipedia contributors',
            wikipediaURL: 'https://en.wikipedia.org/wiki/Zephyrosaurus',
            license: 'Creative Commons Attribution-Share Alike 4.0',
            licenseURL:
                'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
        },
    };
};

export default async function DinoPage({
    params,
}: {
    params: { name: string };
}) {
    const dino = await getDinoData(params.name);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
                <div className="w-full">
                    <Link
                        className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                        href="/"
                    >
                        ← Back to DinoDex
                    </Link>
                </div>
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            {dino.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 ring-1 ring-primary-200 dark:bg-primary-900/80 dark:text-primary-100 dark:ring-primary-700">
                                {dino.diet}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 ring-1 ring-primary-200 dark:bg-primary-900/80 dark:text-primary-100 dark:ring-primary-700">
                                {dino.locomotionType}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600">
                                <svg
                                    className="mr-1.5 h-4 w-4 text-amber-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                                {dino.temporalRange}
                            </span>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
                        <div className="h-72 w-full sm:h-80 md:h-96">
                            <img
                                alt={dino.image.description}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                src={dino.image.imageURL}
                            />
                        </div>
                        <div className="space-y-3 p-6 text-sm text-gray-500 dark:text-gray-400">
                            <p className="leading-relaxed">
                                {dino.image.description}
                            </p>
                            <div className="pt-2 text-sm">
                                <p>
                                    By{' '}
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                                        href={dino.image.authorURL}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {dino.image.author}
                                    </a>{' '}
                                    |
                                    <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                                        href={dino.image.licenseURL}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {dino.image.license}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6 dark:prose-invert dark:prose-headings:text-white">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Description
                            </h2>
                            <div className="prose prose-gray max-w-none dark:prose-invert">
                                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                                    {dino.description}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Classification
                            </h2>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
                                    {[
                                        {
                                            label: 'Domain',
                                            value: dino.classificationInfo
                                                .domain,
                                        },
                                        {
                                            label: 'Kingdom',
                                            value: dino.classificationInfo
                                                .kingdom,
                                        },
                                        {
                                            label: 'Phylum',
                                            value: dino.classificationInfo
                                                .phylum,
                                        },
                                        {
                                            label: 'Clade',
                                            value: dino.classificationInfo.clade.join(
                                                ', ',
                                            ),
                                        },
                                        {
                                            label: 'Family',
                                            value: dino.classificationInfo
                                                .familyInfo[0].value,
                                        },
                                        ...dino.classificationInfo.genusInfo.map(
                                            (genus) => ({
                                                label: genus.genusType,
                                                value: genus.value,
                                            }),
                                        ),
                                    ].map((item, index) => (
                                        <div
                                            className="grid grid-cols-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                            key={`classification-${index}`}
                                        >
                                            <div className="bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-300 sm:px-6">
                                                {item.label}
                                            </div>
                                            <div className="col-span-2 px-4 py-3.5 text-sm text-gray-900 dark:text-gray-100 sm:px-6">
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Source & Attribution
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                This content is from the article "
                                {dino.source.pageTitle}" on Wikipedia, used
                                under the {dino.source.license}. The original
                                article can be found at:{' '}
                                <a
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                                    href={dino.source.wikipediaURL}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {dino.source.wikipediaURL}
                                </a>
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Content is available under {dino.source.license}{' '}
                                unless otherwise noted.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
