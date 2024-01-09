'use client';

import { signOut } from 'next-auth/react';

export default function SignIn() {
  signOut('google', {
    callbackUrl: '/profile'
  });
}
