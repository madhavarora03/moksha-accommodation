import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body: string = await req.json();

    // body contains a string which is the promo code check in the db
    // and return success based on that
  return NextResponse.json({ success: true });
}
