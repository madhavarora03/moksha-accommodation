import Image from 'next/image';

export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-hot-pink w-4/6 rounded md:mt-20 mt-16 mx-auto h-96 relative border-2 border-violet shadow-[4px_4px_0_0_#FC70FF]'>
      <Image
        src='/camera.svg'
        alt='camera'
        width={200}
        height={200}
        className='absolute md:-top-16 md:-right-12 -top-12 -right-9 md:w-[125px] md:h-[125px] w-24 h-24'
      />
      <Image
        src='/plug.svg'
        alt='plug'
        width={100}
        height={100}
        className='absolute md:-top-[3.2rem] md:-left-7 -top-10 -left-5 md:w-[120px] md:h-[120px] w-[5.5rem] h-[5.5rem]'
      />
      <Image
        src='/cluster.svg'
        alt='cluster'
        width={300}
        height={300}
        className='absolute md:-bottom-[6.5rem] md:-left-[3.25rem] -bottom-16 -left-9 md:w-[250px] md:h-[250px] w-44 h-44'
      />
      <main className='flex flex-col items-center justify-center w-full text-center h-full'>
        {children}
      </main>
    </div>
  );
}
