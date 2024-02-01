import { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } from '@/config';
import Razorpay from 'razorpay';

export const instance = new Razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_API_SECRET,
});
