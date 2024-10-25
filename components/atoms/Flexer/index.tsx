import type { FC, ReactNode } from 'react';

interface FlexerProps {
  gap: number;
  children: ReactNode;
}

const Flexer: FC<FlexerProps> = ({ gap, children }) => {
  return (
    <div className={`flex flex-col`} style={{ gap: `${gap}rem` }}>
      {children}
    </div>
  );
};

export default Flexer;
