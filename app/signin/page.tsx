'use client';

import { signIn } from 'next-auth/react';

export default function SignIn() {
  signIn('google', {
    callbackUrl: '/profile'
  });
}
