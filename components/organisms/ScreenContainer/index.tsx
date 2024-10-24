import type { FC, ReactNode } from 'react';

import Navbar from '@/components/molecules/Navbar';

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full max-w-screen-xl mx-auto">
        <Navbar />
        <div className="py-10 px-4">{children}</div>
      </div>
    </div>
  );
};

export default ScreenContainer;
