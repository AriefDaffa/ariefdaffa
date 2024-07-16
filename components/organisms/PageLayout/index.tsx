import type { FC, ReactNode } from 'react';

import Navbar from '@/components/molecules/Navbar';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="size-full dark:bg-black dark:text-white">
      <div className="size-full sticky top-0 backdrop-blur-sm z-40">
        <Navbar />
      </div>
      <div className="size-full flex flex-col relative">
        <div className="size-full w-full max-w-screen-xl mx-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
