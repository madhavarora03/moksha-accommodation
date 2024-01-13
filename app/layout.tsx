import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import localFont from 'next/font/local';
import Provider from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
  title: 'Moksha Accommodation',
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
        className={`${inter.className} ${munro.variable} ${silkscreen.variable} w-full flex flex-col items-center min-h-screen bg-black text-white bg-home bg-cover bg-no-repeat bg-center`}
      >
        <div>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
