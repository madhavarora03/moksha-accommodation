'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function SignIn() {
  useEffect(() => {
    const url = window.location.href.split('redirectTo=')[1];
    signIn('google', {
      callbackUrl: url ?? '/profile',
    });
  }, []);
  return null;
}
