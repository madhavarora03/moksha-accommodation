import { config } from 'dotenv';
import { object, string } from 'zod';
config({ path: '.env.local' });

const schema = object({
  GOOGLE_CLIENT_ID: string(),
  GOOGLE_CLIENT_SECRET: string(),
  NEXTAUTH_URL: string(),
  NEXTAUTH_SECRET: string(),
  RAZORPAY_API_KEY: string(),
  RAZORPAY_API_SECRET: string(),
  NEXT_PUBLIC_RAZORPAY_API_KEY: string(),
});

const env = schema.parse(process.env);

export const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NEXTAUTH_URL,
  NEXTAUTH_SECRET,
  RAZORPAY_API_KEY,
  RAZORPAY_API_SECRET,
  NEXT_PUBLIC_RAZORPAY_API_KEY,
} = env;
