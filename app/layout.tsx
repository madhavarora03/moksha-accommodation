import Header from '@/components/Header';
import Provider from '@/components/Provider';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import localFont from 'next/font/local';
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
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${lato.className} ${upheavtt.variable} min-h-dvh bg-dark-violet`}
        style={{
          backgroundImage: 'url(/bg-elem.svg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <Provider>
          <Header />
          {/* <SideBar /> */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
