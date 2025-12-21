export const OLocomotion = {
  BIPED: 'biped',
  FACULTATIVE_BIPED: 'facultative biped',
  GLIDING: 'gliding',
  QUADRUPED: 'quadruped',
  SWIMMING: 'swimming',
} as const;

export type Locomotion = (typeof OLocomotion)[keyof typeof OLocomotion] | string;
