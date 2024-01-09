'use client';

import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState, useEffect, useRef } from 'react';
import logo from '@/assets/Logo.svg';
import person from '../assets/person.svg';
import triangle from '../assets/triangle.svg';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data: session } = useSession();
  const path = usePathname();

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
  }, [menu]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
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

  const navbarClasses = `flex items-center justify-between bg-[#1111115e] py-4 px-12 mt-12 sticky top-0 z-50 border-[0.1px] border-gray-800 transition-all ease-in duration-300 ${
    isSticky ? 'w-full rounded-none' : 'rounded-full md:w-4/5 w-11/12'
  }`;

  return (
    <nav
      className={navbarClasses}
      style={{
        backdropFilter: 'blur(7.6px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div onClick={() => redirect('/')}>
        <Image
          src={logo}
          alt='Moksha 2024 Logo'
          className='h-10 cursor-pointer w-auto'
        />
      </div>
      <div>
        <div className=''>
          <Image
            src={session ? session?.user?.image : person}
            alt='No Image'
            className={`h-10 ${
              !session && 'p-2'
            } border rounded-full cursor-pointer w-auto`}
            onClick={() => setToggleMenu(!toggleMenu)}
            height={40}
            width={40}
            ref={img}
          />
          <div
            className={`absolute right-8 mt-4 w-40 bg-black border border-gray-700 rounded-md shadow-lg pt-2 pb-[2px] px-[2px] z-[1000000] font-retro transition-all ease-in-out duration-300 text-right ${
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
                <Link
                  className='block px-4 py-2 text-sm text-gray-500 hover:text-black hover:bg-red-600 cursor-pointer rounded-md'
                  href={`/signout?url=${path}`}
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                className='block px-4 py-2 text-sm text-gray-500 hover:text-[#fcff19] cursor-pointer'
                href={`/signin?url=${path}`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
