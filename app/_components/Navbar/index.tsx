'use client';

import type { FC } from 'react';

import TitleNav from './TitleNav';
import Navigation from './Navigation';
import DarkTheme from './DarkTheme';

const Navbar: FC = () => {
  return (
    <div className="screen-full md:max-h-1/4 border-b-[1px] dark:border-gray-800 flex-col bg-white dark:bg-black md:flex-row">
      <div className="mx-auto flex flex-col md:flex-row">
        <TitleNav />
        <div className="md:w-1/3 border-t-[1px] md:border-t-0 border-l-[1px] flex flex-col dark:border-gray-800">
          <Navigation />
          <DarkTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
