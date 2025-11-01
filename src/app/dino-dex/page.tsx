import Link from 'next/link';

type Dinosaur = {
    id: number;
    name: string;
    image: string;
    discovered: boolean;
    locomotion: 'Bipedal' | 'Quadrupedal' | 'Bipedal/Quadrupedal';
    diet: 'Herbivore' | 'Carnivore' | 'Omnivore';
};

const DINO_DATA: Dinosaur[] = [
    {
        id: 1,
        name: 'Zephyrosaurus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Zephyrosaurus_in_Copenhagen.jpg',
        discovered: true,
        locomotion: 'Bipedal',
        diet: 'Herbivore',
    },
    {
        id: 2,
        name: 'Tyrannosaurus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Tyrannosaurus_Rex_Holotype.jpg',
        discovered: false,
        locomotion: 'Bipedal',
        diet: 'Carnivore',
    },
    {
        id: 3,
        name: 'Triceratops',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Triceratops_and_Leptoceratops.jpg/640px-Triceratops_and_Leptoceratops.jpg',
        discovered: true,
        locomotion: 'Quadrupedal',
        diet: 'Herbivore',
    },
    {
        id: 4,
        name: 'Stegosaurus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Stegosaurus_stenops_Santa_Maria_Formation.jpg/640px-Stegosaurus_stenops_Santa_Maria_Formation.jpg',
        discovered: true,
        locomotion: 'Quadrupedal',
        diet: 'Herbivore',
    },
    {
        id: 5,
        name: 'Spinosaurus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Spinosaurus_white_background.jpg/640px-Spinosaurus_white_background.jpg',
        discovered: true,
        locomotion: 'Bipedal/Quadrupedal',
        diet: 'Carnivore',
    },
];

const totalDinos = DINO_DATA.length;
const discoveredDinos = DINO_DATA.filter((dino) => dino.discovered).length;
const discoveryPercentage = Math.round((discoveredDinos / totalDinos) * 100);

export default function DinoDexPage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
                <div className="mb-8">
                    <Link
                        className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                        href="/"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        DinoDex
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Track your discoveries and learn about prehistoric
                        creatures in your personal DinoDex collection
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6">
                        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            <span>Dinosaurs Discovered</span>
                            <span>
                                {discoveredDinos} / {totalDinos} (
                                {discoveryPercentage}%)
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-primary-600 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${discoveryPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {DINO_DATA.map((dino) => (
                        <Link
                            className={`group relative overflow-hidden rounded-xl bg-white p-3 sm:p-4 shadow-md transition-all duration-300 dark:bg-gray-800 ${
                                dino.discovered
                                    ? 'opacity-100 hover:shadow-lg hover:-translate-y-1'
                                    : 'opacity-40 grayscale hover:opacity-50'
                            }`}
                            href={`/dinos/${dino.name.toLowerCase()}`}
                            key={dino.id}
                        >
                            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                                {dino.image && (
                                    <img
                                        alt={dino.name}
                                        className="h-full w-full"
                                        loading="lazy"
                                        src={dino.image}
                                    />
                                )}
                                {!dino.discovered && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <span className="text-sm font-medium text-white">
                                            ???
                                        </span>
                                    </div>
                                )}
                            </div>
                            <h3 className="mt-2 text-center text-sm font-medium text-gray-900 dark:text-white">
                                {dino.discovered ? dino.name : '???'}
                            </h3>
                            {!dino.discovered && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
