'use client';

import { signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
export default function SignIn() {
  const searchParams = useSearchParams();
  signOut({
    callbackUrl: searchParams.get('url') || '/',
  });
}
