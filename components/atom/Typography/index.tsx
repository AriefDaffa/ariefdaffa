import { useMemo } from 'react';
import type { FC, ReactNode } from 'react';

interface TypographyProps {
  type: 'title' | 'title-subheader';
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ children, type }) => {
  const checkType = useMemo(() => {
    if (type === 'title') {
      return 'font-bold text-4xl sm:text-6xl lg:text-8xl xl:text-9xl';
    } else if (type === 'title-subheader') {
      return 'text-base text-justify md:text-lg';
    }
  }, [type]);

  return <div className={`${checkType}`}>{children}</div>;
};

export default Typography;
