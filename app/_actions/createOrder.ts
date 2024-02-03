'use server';

import Razorpay from 'razorpay';

export default async function createOrder(amount: number) {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY ?? 'this is a test key',
    key_secret: process.env.RAZORPAY_API_SECRET ?? 'this is a test secret',
  });
  const options = {
    amount: amount * 100,
    currency: 'INR',
  };
  const order = await instance.orders.create(options);

  alert(order);
  return;
}
