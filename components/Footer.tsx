import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='flex bg-pumpkin shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98] mb-9 md:w-4/5 justify-center items-center font-bold my-3 py-4 flex-wrap px-4 mt-9 md:mx-auto mx-8'>
      <div>
        <Link
          href='https://www.instagram.com/mokshansut/'
          target='_blank'
          className='text-5xl m-2.5'
        >
          <InstagramIcon fontSize='inherit' />
        </Link>
        <Link
          href='https://www.facebook.com/mokshansut/'
          target='_blank'
          className='text-5xl m-2.5'
        >
          <FacebookIcon fontSize='inherit' />
        </Link>
        <Link
          href='https://x.com/mokshansut?s=11'
          target='_blank'
          className='text-5xl m-2.5'
        >
          <XIcon fontSize='inherit' />
        </Link>
      </div>
      {/* <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_1.png'
        alt=''
        height={100}
        width={100}
        className='my-2.5'
      /> */}
      <Link
        href='mailto:moksha@nsut.ac.in'
        className='bg-black mx-3 my-4 px-5 py-4'
      >
        Contact Us
      </Link>
      {/* <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_3.png'
        alt=''
        height={100}
        width={100}
        className='my-2.5'
      /> */}
      <Link
        href='https://www.mokshansut.com'
        className='bg-black mx-3 px-5 py-4'
      >
        History
      </Link>
      <div className='text-center m-5 max-w-80 text-black leading-tight text-sm md:text-base md:leading-snug'>
        Netaji Subhas University Of Technology, Azad Hind Fauj Marg, Dwarka
        Sector-3, Dwarka, Delhi, 110078
      </div>
    </div>
  );
};

export default Footer;
