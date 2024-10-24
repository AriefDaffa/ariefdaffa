'use client';

import type { FC } from 'react';

import ButtonNavbar from '@/components/atoms/ButtonNavbar';
import DarkModeToggle from '@/components/atoms/DarkModeToggle';
import { navbarMenu } from '@/constant/navbarMenu';

// interface NavbarProps {}

const Navbar: FC = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-[360px] mx-auto p-2 rounded-full flex flex-col justify-center bg-black text-white dark:bg-white dark:text-black">
        <div className="w-full flex justify-between items-center">
          {navbarMenu.map((item, idx) => (
            <ButtonNavbar key={idx} path={item.path} text={item.name} />
          ))}
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
