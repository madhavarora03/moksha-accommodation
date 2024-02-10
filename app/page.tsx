import FAQPage from '@/components/FAQPage';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <RegisterForm />
      <div className='mt-8 h-full relative'>
        {/* <Tippie /> */}
        <Image src='/faq-divider.png' alt='FAQs' width={1920} height={1080} />
        <div className='h-full bg-[#dd79bb] py-2'>
          <FAQPage />
          <Footer />
        </div>
      </div>
    </>
  );
}
