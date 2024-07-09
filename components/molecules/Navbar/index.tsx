import Image from 'next/image';

import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <Image src="/images/logo.png" alt="" width={60} height={60} />
    </div>
  );
};

export default Navbar;
