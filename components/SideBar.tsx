'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <>
      <div className='fixed top-1/4 pt-10 flex flex-col gap-6'>
        <div>
          <Link href='https://www.mokshansut.com' target='_blank'>
            <Image
              src='/main-site.svg'
              alt='main-site'
              height={100}
              width={100}
              className='h-24 w-24'
            />
          </Link>
        </div>
        <div>
          <Link href='https://nsut.store/' target='_blank'>
            <Image
              src='/shopify.svg'
              alt='shopify-svg'
              height={100}
              width={100}
              className='h-24 w-24'
            />
          </Link>
        </div>
        <div>
          <Link href='https://www.mokshansut.com/cl' target='_blank'>
            <Image
              src='/cl.svg'
              alt='shopify-svg'
              height={100}
              width={100}
              className='h-24 w-24'
            />
          </Link>
        </div>
      </div>
    </>
  );
}
