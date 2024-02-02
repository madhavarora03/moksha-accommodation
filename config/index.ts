import { config } from 'dotenv';
import { object, string } from 'zod';
config({ path: '.env.local' });

const schema = object({
  RAZORPAY_API_KEY: string(),
  RAZORPAY_API_SECRET: string(),
  NEXT_PUBLIC_RAZORPAY_API_KEY: string(),
});

const env = schema.parse(process.env);

export const {
  RAZORPAY_API_KEY,
  RAZORPAY_API_SECRET,
  NEXT_PUBLIC_RAZORPAY_API_KEY,
} = env;
