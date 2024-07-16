import type { FC, ReactNode } from 'react';

interface SpacerProps {
  children: ReactNode;
  gap?: string;
}

const Spacer: FC<SpacerProps> = ({ children, gap = '1rem' }) => {
  return <div className={`flex flex-col`}>{children}</div>;
};

export default Spacer;
