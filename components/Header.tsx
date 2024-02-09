'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const menu = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        menu.current &&
        !(
          menu.current.contains(event.target) ||
          img?.current?.contains(event.target)
        )
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu, img]);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const newOffset = window.innerWidth < 768 ? 26 : 90;
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

  const { data: session } = useSession();

  return (
    <nav
      className={`flex mx-auto items-center justify-between bg-fade-pink py-1 md:py-0 px-5 md:px-7 mt-8 md:mt-24 sticky top-0 z-50 transition-all ease-in duration-200 outline outline-2 ${
        isSticky
          ? 'w-full rounded-none outline-offset-0'
          : 'rounded-full md:w-[72.5%] w-11/12 outline-offset-2'
      }`}
    >
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          height={100}
          width={500}
          className='md:h-14 h-10 cursor-pointer w-auto py-2.5 md:py-4'
        />
      </Link>
      <div>
        <Image
          src={session ? (session?.user?.image as string) : '/person.svg'}
          alt='No Image'
          className={`h-9 md:h-10 ${
            !session && 'p-1.5'
          } border-2 border-white rounded-full cursor-pointer w-auto`}
          onClick={() => setToggleMenu(!toggleMenu)}
          height={40}
          width={40}
          ref={img}
        />
        <div
          className={`absolute md:right-2.5 right-0 mt-2 md:mt-4 w-40 bg-black border-[3px] border-gray-700 rounded-md shadow-lg pt-2 pb-[2px] px-[2px] z-[1000000] font-retro transition-all ease-in-out duration-300 text-right ${
            toggleMenu
              ? 'top-16 opacity-100'
              : 'top-10 opacity-0 pointer-events-none'
          }`}
          ref={menu}
        >
          <Image
            src='/triangle.svg'
            alt='triangle'
            height={32}
            width={32}
            className='h-8 absolute -top-[1.40rem] right-[1rem] w-auto'
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
          )}
        </div>
      </div>
    </nav>
  );
}
