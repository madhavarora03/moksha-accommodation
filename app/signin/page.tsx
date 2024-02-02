'use client';

import { signIn } from 'next-auth/react';
import { redirect, useSearchParams } from 'next/navigation';

export default function SignIn() {
  const searchParams = useSearchParams();

  console.log(searchParams.get('callbackUrl'));

  signIn('google', {
    callbackUrl: `${
      searchParams.get('callbackUrl') !== null
        ? searchParams.get('callbackUrl')
        : '/profile'
    }`,
  });
  return (
    <div>
      <h1>You must sign in before registration, redirecting...</h1>
    </div>
  );
}
