'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

const Navbar: FC = () => {
  const pathname = usePathname();

  const { setTheme, theme } = useTheme();

  const menuArr = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/blog', name: 'Blog' },
    { path: '/about', name: 'About' },
  ];

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="screen-full md:max-h-1/4 border-b-[1px] dark:border-gray-800 flex-col md:flex-row">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="md:w-2/3 flex justify-end">
          <div className="flex flex-col justify-between px-8 py-4 w-full ">
            {pathname === '/' ? (
              <div className="md:w-2/3 text-2xl ">
                A{' '}
                <span className="text-primary font-semibold">
                  Web Developer
                </span>{' '}
                who loves reading novel that it&apos;s become an
                obsession—almost to the point of getting sick of them!
              </div>
            ) : (
              <div className="text-xl md:text-6xl font-bold line-clamp-2 leading-loose lg:text-8xl h-full">
                {pathname}
              </div>
            )}
            <div className="text-gray-500">© Arief Daffa 2024</div>
          </div>
        </div>
        <div className="md:w-1/3 border-t-[1px] md:border-t-0 border-l-[1px] flex flex-col dark:border-gray-800">
          <div className=" dark:border-gray-800 md:max-w-[450px]">
            <div className="flex flex-row px-8 py-4 justify-between flex-1">
              <div className="text-gray-500">Navigate</div>
              <div className="self-end text-right flex flex-col gap-2">
                {menuArr.map((item, idx) => (
                  <a
                    href={item.path}
                    key={idx}
                    className={`cursor-pointer hover:text-primary ${
                      pathname === item.path && 'font-bold text-primary'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
