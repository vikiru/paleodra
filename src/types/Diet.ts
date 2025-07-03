export const ODiet = {
    CARNIVORE: 'carnivore',
    HERBIVORE: 'herbivore',
    OMNIVORE: 'omnivore',
    PISCIVORE: 'piscivore',
    INSECTIVORE: 'insectivore',
} as const;

export type Diet = (typeof ODiet)[keyof typeof ODiet];
