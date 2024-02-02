import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';
import { config } from 'dotenv';

config({ path: '.env.local' });

export const env = createEnv({
  server: {
    RAZORPAY_API_KEY: z.string(),
    RAZORPAY_API_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_RAZORPAY_API_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_RAZORPAY_API_KEY: process.env.RAZORPAY_API_KEY ?? '',
    RAZORPAY_API_SECRET: process.env.RAZORPAY_API_SECRET ?? '',
  },
});
