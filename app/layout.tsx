import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import localFont from 'next/font/local';
import Provider from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--base',
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
        className={`${inter.className} w-full min-h-screen bg-[linear-gradient(180deg,rgba(21,10,36,1)_0%,rgba(21,10,36,1)_60%,rgba(220,121,186,1)_70%,rgba(220,121,186,1)_100%)] text-white`}
      >
        <NextTopLoader color='#ff0000' />
        <Provider>
          <div>
            <Header />
            <div className='md:mt-10 mt-6'>{children}</div>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
