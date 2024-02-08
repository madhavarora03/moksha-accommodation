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
      <div className='flex flex-row-reverse mt-4 gap-4 md:scale-100 scale-75 md:w-full w-[116.67%]'>
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width={24} height={24} fill='url(#pattern0)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width={1}
              height={1}
            >
              <use xlinkHref='#image0_36_275' transform='scale(0.1)' />
            </pattern>
            <image
              id='image0_36_275'
              width={10}
              height={10}
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgBVVAxUsMwENw9PJYpmFDwAYaWIj8Izg9oKBmGjzh+SUxFSQdlSApqPsAbYIbaWk6ymCS6OUl3e7d7ElHWxysWTY1VCJw3AeehxntT6eniGkPCLW2bF3QUNwQW7jMIIHHDyta/X+hSDd+e8dAErpsgORudTe75nGLJoGVlxD2gzOFscqNwuDx/gq6KYptCTU63KUDpU0pwbt7+wwJl2O9eov+IltQ088foMzMVSEXuWN52VldYZcjyfGnaSUD7To0YbHmHrRP0mYpKstg3CjGyP70ch/yP7W10Vnv06XZ5SuB7HLGNUHt2FfuU+AOqPVhYbfAI2AAAAABJRU5ErkJggg=='
            />
          </defs>
        </svg>
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width={24} height={24} fill='url(#pattern0)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width={1}
              height={1}
            >
              <use xlinkHref='#image0_36_275' transform='scale(0.1)' />
            </pattern>
            <image
              id='image0_36_275'
              width={10}
              height={10}
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgBVVAxUsMwENw9PJYpmFDwAYaWIj8Izg9oKBmGjzh+SUxFSQdlSApqPsAbYIbaWk6ymCS6OUl3e7d7ElHWxysWTY1VCJw3AeehxntT6eniGkPCLW2bF3QUNwQW7jMIIHHDyta/X+hSDd+e8dAErpsgORudTe75nGLJoGVlxD2gzOFscqNwuDx/gq6KYptCTU63KUDpU0pwbt7+wwJl2O9eov+IltQ088foMzMVSEXuWN52VldYZcjyfGnaSUD7To0YbHmHrRP0mYpKstg3CjGyP70ch/yP7W10Vnv06XZ5SuB7HLGNUHt2FfuU+AOqPVhYbfAI2AAAAABJRU5ErkJggg=='
            />
          </defs>
        </svg>
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width={24} height={24} fill='url(#pattern0)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width={1}
              height={1}
            >
              <use xlinkHref='#image0_36_275' transform='scale(0.1)' />
            </pattern>
            <image
              id='image0_36_275'
              width={10}
              height={10}
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgBVVAxUsMwENw9PJYpmFDwAYaWIj8Izg9oKBmGjzh+SUxFSQdlSApqPsAbYIbaWk6ymCS6OUl3e7d7ElHWxysWTY1VCJw3AeehxntT6eniGkPCLW2bF3QUNwQW7jMIIHHDyta/X+hSDd+e8dAErpsgORudTe75nGLJoGVlxD2gzOFscqNwuDx/gq6KYptCTU63KUDpU0pwbt7+wwJl2O9eov+IltQ088foMzMVSEXuWN52VldYZcjyfGnaSUD7To0YbHmHrRP0mYpKstg3CjGyP70ch/yP7W10Vnv06XZ5SuB7HLGNUHt2FfuU+AOqPVhYbfAI2AAAAABJRU5ErkJggg=='
            />
          </defs>
        </svg>
      </div>
    </div>
  );
}
