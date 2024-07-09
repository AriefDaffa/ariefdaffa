import type { FC, ReactNode } from 'react';

import Navbar from '@/components/molecules/Navbar';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="size-full flex flex-col">
      <Navbar />
      <div className="size-full w-full max-w-screen-xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
