import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export async function POST(req: Request, _: Response) {
  try {
    const { paymentId, orderId, signature } = await req.json();
    const generated = hash(orderId + '|' + paymentId);

    if (generated !== signature) {
      throw new Error('Signature validation failed');
    }

    return NextResponse.redirect(new URL('/profile', req.url));
  } catch (error) {
    console.error('Error processing Razorpay webhook:', error);
    return NextResponse.error();
  }
}


function hash(string: string) {
  return createHmac('sha256', process.env.RAZORPAY_API_SECRET ?? '').update(string).digest('hex');
}
