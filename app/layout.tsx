import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import localFont from 'next/font/local';
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
        className={`${inter.className} ${munro.variable} ${silkscreen.variable} w-full flex flex-col items-center min-h-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
