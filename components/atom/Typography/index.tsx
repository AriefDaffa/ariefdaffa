import { useMemo } from 'react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface TypographyProps {
  type: 'title' | 'title-subheader' | 'header';
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement> | string;
}

const Typography: FC<TypographyProps> = ({ children, type, className }) => {
  const checkType = useMemo(() => {
    if (type === 'title') {
      return 'font-bold text-4xl sm:text-6xl lg:text-8xl xl:text-9xl';
    } else if (type === 'title-subheader') {
      return 'text-base text-justify md:text-lg';
    } else if (type === 'header') {
      return 'font-bold text-4xl';
    }
  }, [type]);

  return <div className={`${checkType} ${className}`}>{children}</div>;
};

export default Typography;
