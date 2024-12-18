import { useTheme } from 'next-themes';
import type { FC } from 'react';

const DarkTheme: FC = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="border-t-[1px] dark:border-gray-800 ">
      <div className="px-8 py-4 flex justify-between md:max-w-[450px]">
        <div className="text-gray-500">Dark Mode</div>
        <div className="">
          <button id="theme-toggle" onClick={handleThemeChange}>
            <div className="dark:hidden">🌙</div>
            <div className="hidden dark:block">☀️</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkTheme;
