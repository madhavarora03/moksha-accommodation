import Link from 'next/link';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import footerLogo from '@/assets/footerLogo.png';

const Footer = () => {
  return (
    <div className='min-h-20 grid w-full grid-cols-12 bg-[#a0b0b5] px-10 text-white'>
      <div className='col-span-12 flex h-full w-full justify-center pt-4 md:hidden'>
        <Image
          alt='asa'
          src={footerLogo}
          decoding='async'
          data-nimg='1'
          className='h-14 w-fit'
          style={{ color: 'transparent' }}
        />
        <div className='hidden h-full items-center justify-between space-x-6 sm:flex sm:px-0 '>
          <Link
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/mokshansut/'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <FaFacebook />
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/mokshansut/'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <FaInstagram />
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className='col-span-12 flex w-full items-start justify-around pb-6 pt-4 sm:pb-4 '>
        <div className='hidden font-light md:block'>
          <Image
            alt='asa'
            src={footerLogo}
            decoding='async'
            data-nimg='1'
            className='h-20 w-fit object-contain font-koulen'
            style={{ color: 'transparent' }}
          />
        </div>
        <div className=''>
          <div className='relative mb-1 '>
            <div className='absolute top-0 h-[2px] font-medium left-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
            Co-ordinators:
            <div className='absolute bottom-0 h-[2px] right-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
          </div>
          <div className='flex max-w-[200px] flex-col justify-between'>
            <div className='text-xs font-medium'>Daksh Panchal </div>
            <div className='text-xs font-medium'>Priyanshi </div>
            <div className='text-xs font-medium'>Janvi Ahluwalia </div>
          </div>
        </div>
        <div className=''>
          <div className='relative mb-1 '>
            <div className='absolute top-0 h-[2px] left-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
            Moksha:
            <div className='absolute bottom-0 h-[2px] right-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
          </div>
          <div className='text-xs'>
            <Link
              target='_blank'
              rel='noreferrer'
              href='mailto:Moksha@nsut.ac.in'
              className='tracking-wide'
            >
              moksha@nsut.ac.in
            </Link>
          </div>
          <div className='flex h-full items-center justify-between sm:hidden sm:px-0 '>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaFacebook />
            </Link>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaInstagram />
            </Link>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className='hidden font-light sm:block '>
          <div className='relative mb-1 '>
            <div className='absolute top-0 h-[2px] left-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
            Links:
            <div className='absolute bottom-0 h-[2px] right-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
          </div>
          <div className='text-xs transition-all duration-100 '>
            <Link href='/userlogin'>REGISTER</Link>
          </div>
          <div className='text-xs transition-all duration-100 '>
            <Link href='/faq'>FAQs</Link>
          </div>
          <div className='text-yellow-400 text-xs transition-all duration-100 '></div>
        </div>
        <div className='hidden font-light md:block'>
          <div className='relative mb-1 font-koulen'>
            <div className='absolute top-0 h-[2px] left-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
            Follow Us:
            <div className='absolute bottom-0 h-[2px] right-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
          </div>
          <div className='hidden h-full items-center justify-start space-x-5 sm:flex sm:px-0 '>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaFacebook />
            </Link>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaInstagram />
            </Link>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <ul className='col-span-12 -ml-10 flex h-full w-screen items-center justify-around bg-prussian-blue-1000 pb-2 text-sm font-light sm:hidden'>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <Link href='/userlogin'>REGISTER</Link>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <Link href='/contact'>CONTACT US</Link>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <Link href='/events'>EVENTS</Link>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <Link href='/faq'>FAQs</Link>
        </li>
        <li className='text-yellow-300 transition-all duration-100 hover:underline hover:underline-offset-2'></li>
      </ul>
    </div>
  );
};

export default Footer;
