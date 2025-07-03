export const OLocomotion = {
    BIPED: 'biped',
    QUADRUPED: 'quadruped',
    FACULTATIVE_BIPED: 'facultative biped',
    SWIMMING: 'swimming',
    GLIDING: 'gliding',
} as const;

export type Locomotion = (typeof OLocomotion)[keyof typeof OLocomotion];
