'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
export default function SignIn() {
  const searchParams = useSearchParams();
  signIn('google', {
    callbackUrl: searchParams.get('url') || '/',
  });
}
