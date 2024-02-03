import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';
import { RAZORPAY_API_SECRET } from '@/config';
// import handleSubmit from '@/app/_actions/handleSubmit';

export async function POST(req: Request, res: Response) {
  const { paymentId, orderId, signature } = await req.json();
  // const searchParams = new URL(req.url).searchParams;
  // const orderId = searchParams.get('orderId') as string;
  const generated = hash(orderId + '|' + paymentId);
  // console.log(generated);
  // console.log(arr);
  if (generated !== signature) {
    return NextResponse.error();
  }

  // DB CALL

  // handleSubmit({});

  // return NextResponse.redirect(new URL('/profile', req.url));
}

function hash(string: string) {
  return createHmac('sha256', RAZORPAY_API_SECRET).update(string).digest('hex');
}
