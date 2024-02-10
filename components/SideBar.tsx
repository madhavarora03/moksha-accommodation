import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <>
      <div className='lg:flex hidden flex-col items-start text-white py-4 space-y-10 z-10 fixed'>
        <div className='group'>
          <Link
            href='https://www.mokshansut.com/'
            target='_blank'
            className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
          >
            <span className='font-bold group-hover:opacity-100 transition-all duration:300 delay-150 -translate-x-[calc(100%-4.5rem)] group-hover:translate-x-0 flex items-center justify-center bg-[#FFED00] rounded-r-2xl px-2 text-lg relative shadow-[2px_2px_4px_0_#a0eeed,4px_4px_8px_0_#00d2cd]'>
              Main website
              <span className='absolute top-[16px] left-[7px] text-[#2b1350]'>
                Main website
              </span>
              <Image
                src='/logomark.JPG'
                alt=''
                width={100}
                height={100}
                className='min-w-16 w-16 h-auto rounded-2xl p-2'
              />
            </span>
          </Link>
        </div>
        <div className='group'>
          <Link
            href='https://www.mokshansut.com/events/'
            target='_blank'
            className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
          >
            <span className='font-bold group-hover:opacity-100 transition-all duration:300 delay-150 -translate-x-[calc(100%-4.5rem)] group-hover:translate-x-0 flex items-center justify-center bg-[#FFED00] rounded-r-2xl px-2 text-lg relative shadow-[2px_2px_4px_0_#a0eeed,4px_4px_8px_0_#00d2cd]'>
              Events
              <span className='absolute top-[16px] left-[7px] text-[#2b1350]'>
                Events
              </span>
              <Image
                src='/logomark.JPG'
                alt=''
                width={100}
                height={100}
                className='min-w-16 w-16 h-auto rounded-2xl p-2'
              />
            </span>
          </Link>
        </div>
        <div className='group'>
          <Link
            href='https://nsut.store/'
            target='_blank'
            className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
          >
            <span className='font-bold group-hover:opacity-100 transition-all duration:300 delay-150 -translate-x-[calc(100%-4.5rem)] group-hover:translate-x-0 flex items-center justify-center bg-[#FFED00] rounded-r-2xl px-2 text-lg relative shadow-[2px_2px_4px_0_#a0eeed,4px_4px_8px_0_#00d2cd]'>
              Merchandise
              <span className='absolute top-[16px] left-[7px] text-[#2b1350]'>
                Merchandise
              </span>
              <Image
                src='/logomark.JPG'
                alt=''
                width={100}
                height={100}
                className='min-w-16 w-16 h-auto rounded-2xl p-2'
              />
            </span>
          </Link>
        </div>
        <div className='group'>
          <Link
            href='https://www.mokshansut.com/cl'
            target='_blank'
            className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
          >
            <span className='font-bold group-hover:opacity-100 transition-all duration:300 delay-150 -translate-x-[calc(100%-4.5rem)] group-hover:translate-x-0 flex items-center justify-center bg-[#FFED00] rounded-r-2xl px-2 text-lg relative shadow-[2px_2px_4px_0_#a0eeed,4px_4px_8px_0_#00d2cd]'>
              Contingent Leader
              <span className='absolute top-[16px] left-[7px] text-[#2b1350]'>
                Contingent Leader
              </span>
              <Image
                src='/logomark.JPG'
                alt=''
                width={100}
                height={100}
                className='min-w-16 w-16 h-auto rounded-2xl p-2'
              />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex lg:hidden flex-col items-start text-white py-4 space-y-10 z-10 fixed pt-12'>
        <Link
          href='https://www.mokshansut.com/'
          target='_blank'
          className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
        >
          <span className='font-bold bg-[#FFED00] rounded-r-2xl px-1 text-lg relative shadow-[1.5px_1.5px_3px_0_#a0eeed,3px_3px_6px_0_#00d2cd]'>
            <Image
              src='/logomark.JPG'
              alt=''
              width={100}
              height={100}
              className='w-12 h-auto rounded-2xl p-1.5'
            />
          </span>
        </Link>
        <Link
          href='https://www.mokshansut.com/events/'
          target='_blank'
          className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
        >
          <span className='font-bold bg-[#FFED00] rounded-r-2xl px-1 text-lg relative shadow-[1.5px_1.5px_3px_0_#a0eeed,3px_3px_6px_0_#00d2cd]'>
            <Image
              src='/logomark.JPG'
              alt=''
              width={100}
              height={100}
              className='w-12 h-auto rounded-2xl p-1.5'
            />
          </span>
        </Link>
        <Link
          href='https://nsut.store/'
          target='_blank'
          className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
        >
          <span className='font-bold bg-[#FFED00] rounded-r-2xl px-1 text-lg relative shadow-[1.5px_1.5px_3px_0_#a0eeed,3px_3px_6px_0_#00d2cd]'>
            <Image
              src='/logomark.JPG'
              alt=''
              width={100}
              height={100}
              className='w-12 h-auto rounded-2xl p-1.5'
            />
          </span>
        </Link>
        <Link
          href='https://www.mokshansut.com/cl'
          target='_blank'
          className='flex items-center justify-center group-hover:w-full transition-all duration-150 ease-in text-[#26e0fa] font-upheavtt'
        >
          <span className='font-bold bg-[#FFED00] rounded-r-2xl px-1 text-lg relative shadow-[1.5px_1.5px_3px_0_#a0eeed,3px_3px_6px_0_#00d2cd]'>
            <Image
              src='/logomark.JPG'
              alt=''
              width={100}
              height={100}
              className='w-12 h-auto rounded-2xl p-1.5'
            />
          </span>
        </Link>
      </div>
    </>
  );
}
