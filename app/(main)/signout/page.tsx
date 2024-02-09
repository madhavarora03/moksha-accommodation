'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
  signOut({
    callbackUrl: '/',
  });
  return (
    <div className='flex justify-center items-center h-[60dvh]'>
      <p className='md:text-6xl text-4xl text-center font-upheavtt '>
        Signing <span className='text-[#FFED00]'>Out...</span>
      </p>
    </div>
  );
}
