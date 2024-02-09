import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY ?? '',
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get('amount') as string;
  const options = {
    amount: Number(amount),
    currency: 'INR',
    receipt: crypto.randomBytes(10).toString('hex'),
  };
  const order = await instance.orders.create(options);

  return NextResponse.json(order);
}
