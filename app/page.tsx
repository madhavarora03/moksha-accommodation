import FAQPage from '@/screens/FAQPage';
import RegScreen from '@/screens/RegistrationScreen';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='w-full'>
      <RegScreen />
      <div className='relative'>
        <Image
          src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/bgs/pink.png'
          alt='pink'
          width={1920}
          height={1080}
        />
        <Image
          src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsMain/hang_2.png'
          alt=''
          width={300}
          height={1080}
          className='absolute top-0 right-0 opacity-50 w-[25dvw]'
        />
      </div>
      <Image
        src='https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/2.png'
        alt=''
        width={1920}
        height={1080}
        className='bg-[#dc79ba] py-12'
      />
      <FAQPage />
    </div>
  );
};

export default Home;
