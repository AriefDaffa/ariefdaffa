import { useTheme } from 'next-themes';
import type { FC } from 'react';

interface DarkModeToggleProps {}

const DarkModeToggle: FC<DarkModeToggleProps> = () => {
  const { setTheme, theme } = useTheme();

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
      {iconShow}
    </div>
  );
};

export default DarkModeToggle;
