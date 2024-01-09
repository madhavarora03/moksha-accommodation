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
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/mokshansut/'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 320 512'
              height='1em'
              width='1em'
              className='h-full w-full font-koulen'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
            </svg>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/mokshansut/'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 448 512'
              height='1em'
              width='1em'
              className='h-full w-full font-koulen'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
            </svg>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
            className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 576 512'
              height='1em'
              width='1em'
              className='h-full w-full font-koulen'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
            </svg>
          </a>
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
            <a
              target='_blank'
              rel='noreferrer'
              href='mailto:Moksha@nsut.ac.in'
              className='tracking-wide'
            >
              moksha@nsut.ac.in
            </a>
          </div>
          <div className='flex h-full items-center justify-between sm:hidden sm:px-0 '>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 320 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
              </svg>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
              </svg>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='hidden font-light sm:block '>
          <div className='relative mb-1 '>
            <div className='absolute top-0 h-[2px] left-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
            Links:
            <div className='absolute bottom-0 h-[2px] right-0 w-[0.01px] bg-white transition-[width] duration-200'></div>
          </div>
          <div className='text-xs transition-all duration-100 '>
            <a href='/userlogin'>REGISTER</a>
          </div>
          <div className='text-xs transition-all duration-100 '>
            <a href='/faq'>FAQs</a>
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
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 320 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
              </svg>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/mokshansut/'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
              </svg>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw'
              className='w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='1em'
                width='1em'
                className='h-full w-full font-koulen'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <ul className='col-span-12 -ml-10 flex h-full w-screen items-center justify-around bg-prussian-blue-1000 pb-2 text-sm font-light sm:hidden'>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <a href='/userlogin'>REGISTER</a>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <a href='/contact'>CONTACT US</a>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <a href='/events'>EVENTS</a>
        </li>
        <li className='transition-all duration-100 hover:underline hover:underline-offset-2'>
          <a href='/faq'>FAQs</a>
        </li>
        <li className='text-yellow-300 transition-all duration-100 hover:underline hover:underline-offset-2'></li>
      </ul>
    </div>

  );
};

export default Footer;
