import Header from '@/components/Header';
import Provider from '@/components/Provider';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--lato',
  weight: '400',
});

const upheavtt = localFont({
  src: '../fonts/upheavtt.ttf',
  display: 'swap',
  variable: '--upheavtt',
});

export const metadata: Metadata = {
  title: 'MV 2024 | Accommodation Portal',
  description: 'Accommodation Portal for MV 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lato.className} ${upheavtt.variable} min-h-dvh bg-dark-violet`}
        style={{
          backgroundImage: 'url(/bg-elem.svg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <NextTopLoader color='#ff0000' />
        <Provider>
          <Header />
          {/* <SideBar /> */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
