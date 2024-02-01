import { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } from '@/config';
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_API_SECRET,
});

const createOrder = async (req: NextRequest, res: NextResponse) => {
  const options = {
    amount: 20000,
    currency: 'INR',
  };

  const order = await instance.orders.create(options);
  console.log(order);
};

export { createOrder as POST };
