'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>{session?.user?.email}</h1>
      <div>
        <Image
          src={session?.user?.image || ''}
          alt='No Image'
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
