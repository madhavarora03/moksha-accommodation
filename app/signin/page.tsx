'use client'

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'; 

export default function SignIn() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirectTo');
  signIn('google', {
    callbackUrl: redirectUrl != null ? redirectUrl : '/profile',
  });
  return null;
}
