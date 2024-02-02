'use server';

import { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } from '@/config';
import Razorpay from 'razorpay';

export default async function createOrder(amount: number) {
  const instance = new Razorpay({
    key_id: RAZORPAY_API_KEY,
    key_secret: RAZORPAY_API_SECRET,
  });
  const options = {
    amount: amount * 100,
    currency: 'INR',
  };
  const order = await instance.orders.create(options);

  alert(order);
  return;
}
