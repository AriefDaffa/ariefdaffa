import type { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  screenSize?: 'xl' | 'md';
}

const PageWrapper: FC<PageWrapperProps> = ({ children, screenSize = 'xl' }) => {
  return (
    <div className="w-full flex">
      <div className={`w-full max-w-screen-${screenSize} mx-auto px-4 `}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
