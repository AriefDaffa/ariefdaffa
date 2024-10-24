'use client';

import Link from 'next/link';
import { IoHomeSharp } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

interface ButtonNavbarProps {
  path: string;
  text: string;
}

const ButtonNavbar: FC<ButtonNavbarProps> = ({ path, text }) => {
  const { theme } = useTheme();
  // ${
  //   theme === 'dark' ? 'navbar-item-dark' : 'navbar-item-light'
  // }
  return (
    <Link
      href={path}
      className={path === '/' ? `bg-white p-4 rounded-full` : ''}
    >
      {text === '' ? (
        <IoHomeSharp className="text-black" size={22} />
      ) : (
        <div
          className={`navbar-item ${
            theme === 'dark' ? 'navbar-item-dark' : 'navbar-item-light'
          }`}
        >
          {text}
        </div>
      )}
    </Link>
  );
};

export default ButtonNavbar;
