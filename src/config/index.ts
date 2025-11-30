import path from 'node:path';
import dotenv from 'dotenv';

import * as z from 'zod';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const envSchema = z.object({
  API_URL: z.url(),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

export const validatedEnv = envSchema.safeParse(process.env);

if (!validatedEnv.success) {
  console.error(validatedEnv.error);
  process.exit(1);
}

export const { API_URL, NODE_ENV } = validatedEnv.data;
