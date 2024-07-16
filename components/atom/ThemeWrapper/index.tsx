'use client';

import { ThemeProvider } from 'next-themes';
import type { FC, ReactNode } from 'react';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeWrapper;
