import { config } from 'dotenv';
import { object, string } from 'zod';
config({ path: '.env.local' });

const schema = object({
  GOOGLE_CLIENT_ID: string({
    required_error: 'GOOGLE_CLIENT_ID is required',
  }).min(1),
  GOOGLE_CLIENT_SECRET: string({
    required_error: 'GOOGLE_CLIENT_SECRET is required',
  }).min(1),
  NEXTAUTH_URL: string({ required_error: 'NEXTAUTH_URL is required' }).min(1),
  NEXTAUTH_SECRET: string({
    required_error: 'NEXTAUTH_SECRET is required',
  }).min(1),
  RAZORPAY_API_KEY: string({
    required_error: 'RAZORPAY_API_KEY is required',
  }).min(1),
  RAZORPAY_API_SECRET: string({
    required_error: 'RAZORPAY_API_SECRET is required',
  }).min(1),
  NEXT_PUBLIC_RAZORPAY_API_KEY: string({
    required_error: 'NEXT_PUBLIC_RAZORPAY_API_KEY is required',
  }).min(1),
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
