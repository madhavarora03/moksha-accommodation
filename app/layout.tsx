import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import localFont from 'next/font/local';
import Provider from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--base',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--retro',
});

const munro = localFont({
  src: '../fonts/munro.woff2',
  display: 'swap',
  variable: '--munro',
});

export const metadata: Metadata = {
  title: 'MV 2024 | Accommodation',
  description:
    'A website to provide booking facilities for Moksha Accommodation 2024',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${munro.variable} ${silkscreen.variable} `}
      >
        <Provider>
          <div className='w-full min-h-screen bg-[linear-gradient(180deg,rgba(21,10,39,1)_0%,rgba(21,10,39,1)_60%,rgba(220,121,186,1)_70%,rgba(220,121,186,1)_100%)] text-white flex justify-between items-center flex-col'>
            <center className='absolute w-full h-full top-0'>
              <Header />
            </center>
            <div className='mt-32 md:mt-40'>{children}</div>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
