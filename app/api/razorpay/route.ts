import { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } from '@/config';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: RAZORPAY_API_KEY,
  key_secret: RAZORPAY_API_SECRET,
});

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get('amount') as string;
  const options = {
    amount: Number(amount) * 100,
    currency: 'INR',
    receipt: crypto.randomBytes(10).toString('hex'),
  };
  const order = await instance.orders.create(options);
  console.log(order);

  return NextResponse.json(order);
}
