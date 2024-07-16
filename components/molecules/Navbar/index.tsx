import Image from 'next/image';

import ThemeToggle from '@/components/atom/ThemeToggle';

import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">
      <Image src="/images/logo.png" alt="" width={60} height={60} />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
