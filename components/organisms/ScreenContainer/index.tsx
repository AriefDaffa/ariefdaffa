import type { FC, ReactNode } from 'react';

import Navbar from '@/components/molecules/Navbar';

interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex bg-c-white">
      <div className="w-full h-full max-w-screen-xl relative mx-auto">
        <Navbar />
        <div className="py-10 px-4 overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
};

export default ScreenContainer;
