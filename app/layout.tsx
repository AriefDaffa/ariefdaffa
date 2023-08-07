import { Suspense } from 'react';
import { Inter } from 'next/font/google';

import Navbar from '@/src/components/UI/Navbar';
import ThemeProvider from '@/src/utils/ThemeProvider';
import { NavigationEvents } from '@/src/utils/NavigationEvents';

import './globals.css';
import 'nprogress/nprogress.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welcome!',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-black bg-white overflow-y-scroll`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="max-w-screen-lg mx-auto ">{children}</div>
          <Suspense>
            <NavigationEvents />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
