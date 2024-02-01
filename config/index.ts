import { config } from 'dotenv';
import { object, string } from 'zod';
config({ path: '.env.local' });

const schema = object({
  RAZORPAY_API_KEY: string({
    required_error: 'Razorpay API key is required',
  }).min(1),
  RAZORPAY_API_SECRET: string({
    required_error: 'Razorpay API secret is required',
  }).min(1),
});

const env = schema.parse(process.env);

export const { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } = env;
