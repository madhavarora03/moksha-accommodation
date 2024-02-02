import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export async function POST(req: Request, res: Response) {
  let text = await req.text();
  const searchParams = new URL(req.url).searchParams;
  const orderId = searchParams.get('orderId') as string;
  var arr;
  arr = text.split('&').map((elem) => {
    return elem.split('=');
  });
  const generated = hash(orderId + '|' + arr[0][1]);
  // console.log(generated);
  // console.log(arr);
  if (generated !== arr[2][1]) {
    return NextResponse.error();
  }

  // DB CALL

  return NextResponse.redirect(new URL('/profile', req.url));
}

function hash(string: string) {
  return createHmac('sha256', process.env.RAZORPAY_API_SECRET ?? '')
    .update(string)
    .digest('hex');
}
