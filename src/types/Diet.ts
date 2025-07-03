export const ODiet = {
    CARNIVORE: 'carnivore',
    HERBIVORE: 'herbivore',
    INSECTIVORE: 'insectivore',
    OMNIVORE: 'omnivore',
    PISCIVORE: 'piscivore',
} as const;

export type Diet = (typeof ODiet)[keyof typeof ODiet];
