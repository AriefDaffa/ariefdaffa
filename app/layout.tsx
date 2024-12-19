import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Navbar from './_components/Navbar';
import { ThemeProvider } from './_provider/theme-provider';
import './globals.css';
import StickyNav from './_components/StickyNav';

export const metadata: Metadata = {
  title: 'Arief Daffa | Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="size-full dark:bg-black dark:text-white ">
            <div className="h-screen flex flex-col overflow-y-scroll">
              <Navbar />
              <div className="size-full">
                <StickyNav />
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
