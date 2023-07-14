'use client';
import { ThemeProvider as Theme } from 'next-themes';
import type { FC, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return <Theme attribute="class">{children}</Theme>;
};

export default ThemeProvider;
