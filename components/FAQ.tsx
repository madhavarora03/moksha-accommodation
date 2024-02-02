'use client';

import React, { useState } from 'react';

type FAQsProps = {
  question: string;
  answer: string;
};

const FAQs: React.FC<FAQsProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      className='w-full bg-[#f60] shadow-[0_0_0_2px_#000,8px_8px_0_0_#34cc98] rounded-xl min-h-max'
      onClick={toggleOpen}
    >
      <div className='text-black md:text-xl font-semibold min-h-12 md:h-16 px-2 md:px-4 py-1 md:py-2 flex justify-between items-center h-fit'>
        <p className=''>{question}</p>
        <span className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.25}
            stroke='currentColor'
            className={`w-6 h-6 transform ${
              open ? '-rotate-45' : 'rotate-0'
            } transition-all duration-100`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </span>
      </div>
      {open && (
        <div className='text-black p-2 md:p-4 md:text-base text-sm'>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQs;
