import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from './_components/Navbar';
import { ThemeProvider } from './_provider/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arief Daffa | Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="size-full dark:bg-black dark:text-white overflow-y-scroll">
            <div className="h-screen flex flex-col">
              <Navbar />
              <div className="w-full md:h-full">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
