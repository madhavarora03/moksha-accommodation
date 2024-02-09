import Camera from './svg/Camera';
import Cluster from './svg/Cluster';
import Plug from './svg/Plug';

export default function FormWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className='bg-hot-pink w-4/6 rounded md:mt-20 mt-16 mx-auto relative border-2 border-violet shadow-[6px_4px_0_0_#FFED00]'>
        <Camera />
        <Plug />
        <Cluster />
        {/* <Wave /> */}
        <main className={className}>{children}</main>
      </div>
      <div className='flex flex-row-reverse md:mt-4 mt-2 gap-4 md:scale-100 scale-50 md:w-4/6 mx-auto w-[110%]'>
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width={24} height={24} fill='url(#patternx)' />
          <defs>
            <pattern
              id='patternx'
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
          <rect width={24} height={24} fill='url(#patternx)' />
          <defs>
            <pattern
              id='patternx'
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
          <rect width={24} height={24} fill='url(#patternx)' />
          <defs>
            <pattern
              id='patternx'
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
    </>
  );
}
