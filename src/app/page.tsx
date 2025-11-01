'use client';
import Link from 'next/link';

const STATS = [
    { value: '1,000+', label: 'Dinosaur Species' },
    { value: '230M', label: 'Years of History' },
    { value: '100+', label: 'Countries' },
    { value: '24/7', label: 'Dino Facts' },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[500px] bg-gradient-to-br from-primary-800 to-primary-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596727147706-ba41edef8b8c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Discover the{' '}
                        <span className="text-primary-300">
                            Prehistoric World
                        </span>
                    </h1>

                    <p className="mb-10 max-w-2xl text-lg sm:text-xl md:text-2xl">
                        Journey through time and explore the fascinating world
                        of dinosaurs with our comprehensive encyclopedia
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            className="rounded-lg bg-primary-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 sm:px-8 sm:py-4"
                            href="/explore"
                        >
                            Explore Dinosaurs
                        </Link>
                        <Link
                            className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 text-lg font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-8 sm:py-4"
                            href="/dino-dex"
                        >
                            View DinoDex
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {STATS.map((stat, index) => (
                            <div
                                className="rounded-xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                                key={`stat-${index}`}
                            >
                                <div className="text-3xl font-bold text-primary-600 md:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                        Explore the Dino Universe
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
                            <div className="mb-4 text-3xl">🦕</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Diverse Species
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Discover hundreds of dinosaur species with
                                detailed information and facts.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800">
                            <div className="mb-4 text-3xl">🔍</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Advanced Search
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Find exactly what you're looking for with our
                                powerful search and filter system.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                            <div className="mb-4 text-3xl">🌍</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Global Distribution
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Explore dinosaur fossils discovered across all
                                seven continents, from the Gobi Desert to
                                Antarctica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-800 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Ready to Start Your Dino Journey?
                    </h2>
                    <p className="mb-8 text-lg">
                        Join thousands of dinosaur enthusiasts exploring the
                        prehistoric world
                    </p>
                    <div className="flex justify-center">
                        <Link
                            className="rounded-lg bg-white px-8 py-4 text-lg font-medium text-primary-700 shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                            href="/explore"
                        >
                            Start Exploring Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
