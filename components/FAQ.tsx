type FAQsProps = {
  index: number;
  question: string;
  answer: string;
  opened: boolean;
};

const FAQ = ({ index, question, answer, opened }: FAQsProps) => {
  return (
    <>
      <div className='text-black md:text-xl font-semibold min-h-12 md:h-16 px-2 md:px-4 py-1 md:py-2 flex justify-between items-center h-fit'>
        <p className='leading-tight tracking-tighter'>{question}</p>
        <span className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.25}
            stroke='currentColor'
            className={`w-6 h-6 transform ${
              opened ? '-rotate-45' : 'rotate-0'
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
      {opened && (
        <div className='text-black p-2 md:p-4 md:text-base text-sm'>
          {answer}
        </div>
      )}
    </>
  );
};

export default FAQ;
