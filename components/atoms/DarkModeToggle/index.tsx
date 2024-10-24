'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, type FC } from 'react';

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const iconShow = theme === 'dark' ? '☀️' : '🌛';

  return (
    <div
      onClick={handleThemeChange}
      className="cursor-pointer pr-4 rounded-full"
    >
      {mounted ? iconShow : '☀️'}
    </div>
  );
};

export default DarkModeToggle;
