'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const newOffset = window.innerWidth < 768 ? 22 : 44;
      if (currentOffset >= newOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const session = null;

  return (
    <nav
      className={`flex mx-auto items-center justify-between bg-hot-pink py-2 px-4 md:px-12 mt-6 md:mt-12 sticky top-0 z-50 transition-all ease-in duration-200 outline outline-2 ${
        isSticky
          ? 'w-full rounded-none outline-offset-0'
          : 'rounded-full md:w-4/5 w-11/12 outline-offset-4'
      }`}
    >
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          height={100}
          width={500}
          className='md:h-14 h-10 cursor-pointer w-auto'
        />
      </Link>
      <div className=''>
        <Image
          // src={session ? session?.user?.image : '/person.svg'}
          src={'/person.svg'}
          alt='No Image'
          className={`h-10 ${
            !session && 'p-1.5'
          } border-2 border-white rounded-full cursor-pointer w-auto`}
          // onClick={() => setToggleMenu(!toggleMenu)}
          height={40}
          width={40}
          // ref={img}
        />
        {/* <div
          className={`absolute md:right-8 right-0 mt-4 w-40 bg-black border-[3px] border-gray-700 rounded-md shadow-lg pt-2 pb-[2px] px-[2px] z-[1000000] font-retro transition-all ease-in-out duration-300 text-right ${
            toggleMenu
              ? 'top-16 opacity-100'
              : 'top-10 opacity-0 pointer-events-none'
          }`}
          ref={menu}
        >
          <Image
            src={triangle}
            alt=''
            className='h-8 absolute -top-[1.40rem] right-[1.25rem] w-auto'
          />
           {session ? (
            <>
              <Link
                className='block px-4 py-2 text-sm hover:text-[#fcff19] text-gray-500 cursor-pointer'
                href='/'
                onClick={() => setToggleMenu(false)}
              >
                Register
              </Link>
              <Link
                className='block px-4 py-2 text-sm hover:text-[#fcff19] text-gray-500 cursor-pointer'
                href='/profile'
                onClick={() => setToggleMenu(false)}
              >
                Profile
              </Link>
              <button
                className='block px-4 py-2 text-sm text-gray-500 hover:text-black hover:bg-red-600 cursor-pointer rounded-md w-full text-right transition-colors duration-150'
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className='block px-4 py-2 text-sm text-gray-500 hover:text-[#fcff19] cursor-pointer w-full text-right'
              onClick={() => signIn('google')}
            >
              Login
            </button>
          )} */}
      </div>
    </nav>
  );
}
