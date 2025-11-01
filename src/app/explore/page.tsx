import { Clock, Filter, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Explore Dinosaurs | DinoDex',
    description:
        'Uncover the fascinating world of dinosaurs! Browse and filter through our extensive collection of dinosaur species, exploring their habitats, characteristics, and more.',
};

type Dinosaur = {
    id: number;
    name: string;
    period: string;
    clade: string;
    diet: string;
    locomotion: string;
    image: string;
};

const DINOSAURS: Dinosaur[] = [
    {
        id: 1,
        name: 'Tyrannosaurus',
        period: 'Late Cretaceous',
        clade: 'Theropod',
        diet: 'Carnivore',
        locomotion: 'Bipedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Tyrannosaurus_Rex_Holotype.jpg',
    },
    {
        id: 2,
        name: 'Triceratops',
        period: 'Late Cretaceous',
        clade: 'Ceratopsian',
        diet: 'Herbivore',
        locomotion: 'Quadrupedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Triceratops_and_Leptoceratops.jpg/640px-Triceratops_and_Leptoceratops.jpg',
    },
    {
        id: 3,
        name: 'Stegosaurus',
        period: 'Late Jurassic',
        clade: 'Stegosaur',
        diet: 'Herbivore',
        locomotion: 'Quadrupedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Stegosaurus_stenops_Santa_Maria_Formation.jpg/640px-Stegosaurus_stenops_Santa_Maria_Formation.jpg',
    },
    {
        id: 4,
        name: 'Velociraptor',
        period: 'Late Cretaceous',
        clade: 'Theropod',
        diet: 'Carnivore',
        locomotion: 'Bipedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Velociraptor_mongoliensis.jpg/640px-Velociraptor_mongoliensis.jpg',
    },
    {
        id: 5,
        name: 'Brachiosaurus',
        period: 'Late Jurassic',
        clade: 'Sauropod',
        diet: 'Herbivore',
        locomotion: 'Quadrupedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Brachiosaurus_altithorax.jpg/640px-Brachiosaurus_altithorax.jpg',
    },
    {
        id: 6,
        name: 'Ankylosaurus',
        period: 'Late Cretaceous',
        clade: 'Ankylosaur',
        diet: 'Herbivore',
        locomotion: 'Quadrupedal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ankylosaurus_dinosaur.png/640px-Ankylosaurus_dinosaur.png',
    },
];

const clades = Array.from(new Set(DINOSAURS.map((dino) => dino.clade))).sort();
const diets = Array.from(new Set(DINOSAURS.map((dino) => dino.diet))).sort();
const locomotions = Array.from(
    new Set(DINOSAURS.map((dino) => dino.locomotion)),
).sort();

export default function ExplorePage({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    const search = searchParams.search?.toLowerCase() || '';
    const cladeFilter = searchParams.clade;
    const dietFilter = searchParams.diet;
    const locomotionFilter = searchParams.locomotion;

    const filteredDinosaurs = DINOSAURS.filter((dino) => {
        const matchesSearch = dino.name.toLowerCase().includes(search);
        const matchesClade = !cladeFilter || dino.clade === cladeFilter;
        const matchesDiet = !dietFilter || dino.diet === dietFilter;
        const matchesLocomotion =
            !locomotionFilter || dino.locomotion === locomotionFilter;

        return (
            matchesSearch && matchesClade && matchesDiet && matchesLocomotion
        );
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="w-full px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <Link
                            className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                            href="/"
                        >
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Explore Dinosaurs
                        </h1>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                            Discover and learn about different dinosaur species
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-8 space-y-4">
                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                className="block w-full py-3 pl-10 pr-4 text-base border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                defaultValue={search}
                                name="search"
                                placeholder="Search dinosaurs..."
                                type="text"
                            />
                        </div>

                        {/* Filter Controls */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Filter className="w-5 h-5 text-gray-400" />
                                </div>
                                <select
                                    className="pl-10 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white appearance-none"
                                    defaultValue={cladeFilter || ''}
                                    name="clade"
                                >
                                    <option value="">All Clades</option>
                                    {clades.map((clade) => (
                                        <option key={clade} value={clade}>
                                            {clade}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="relative">
                                <select
                                    className="pl-3 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white appearance-none"
                                    defaultValue={dietFilter || ''}
                                    name="diet"
                                >
                                    <option value="">All Diets</option>
                                    {diets.map((diet) => (
                                        <option key={diet} value={diet}>
                                            {diet}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Filter className="w-5 h-5 text-gray-400" />
                                </div>
                                <select
                                    className="pl-10 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white appearance-none"
                                    defaultValue={locomotionFilter || ''}
                                    name="locomotion"
                                >
                                    <option value="">All Locomotion</option>
                                    {locomotions.map((locomotion) => (
                                        <option
                                            key={locomotion}
                                            value={locomotion}
                                        >
                                            {locomotion}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                className="px-4 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
                                type="button"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    {filteredDinosaurs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {filteredDinosaurs.map((dino) => (
                                <Link
                                    className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                                    href={`/dinos/${dino.name.toLowerCase()}`}
                                    key={dino.id}
                                >
                                    <div className="aspect-square w-full overflow-hidden">
                                        <img
                                            alt={dino.name}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                            src={dino.image}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {dino.name}
                                        </h3>
                                        <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" />
                                            <span>{dino.period}</span>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-200">
                                                {dino.diet}
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                                {dino.clade}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-dashed border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                                No dinosaurs found
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-gray-400">
                                Try adjusting your search or filter criteria.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
