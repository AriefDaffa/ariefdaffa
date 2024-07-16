'use client';

import { useTheme } from 'next-themes';
import type { FC } from 'react';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return <div onClick={handleThemeChange}>x</div>;
};

export default ThemeToggle;
