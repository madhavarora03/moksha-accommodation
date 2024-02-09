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
  return (
    <div className='flex justify-center items-center h-[60dvh]'>
      <p className='md:text-6xl text-4xl text-center font-upheavtt '>
        You must be signed in!{' '}
        <span className='text-[#FFED00]'>Redirecting...</span>
      </p>
    </div>
  );
}
