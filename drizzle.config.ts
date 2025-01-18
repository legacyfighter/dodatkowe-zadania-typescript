import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/storage/schemas/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
