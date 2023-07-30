'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

import DarkModeToggle from './DarkModeToggle';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  const page = [
    { name: 'Project', url: '/project' },
    { name: 'Blog', url: '/blog' },
    { name: 'About', url: '/about' },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const pathname = usePathname();

  return (
    <Fragment>
      <div className="max-w-screen-lg mx-auto sticky top-0 backdrop-blur-xl z-50 ">
        <div className="sticky top-0 flex flex-row h-16 px-2 justify-between">
          <div
            className="flex flex-col justify-center md:hidden"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <GiHamburgerMenu size={26} />
          </div>
          <div onClick={() => setOpenSidebar(false)}>
            <NavbarLogo />
          </div>
          <div className="hidden md:flex md:flex-row md:flex-1 md:self-center md:overflow-auto md:ml-2">
            {page.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className={`h-16 w-20 flex ${
                  pathname.includes(item.url) ? 'font-extrabold' : 'font-normal'
                }`}
              >
                <div className="p-2 w-full text-center self-center">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="self-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {openSidebar && (
        <div className="fixed z-50 bg-gray-light dark:bg-black-main h-screen w-screen md:hidden">
          {page.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className=""
              onClick={() => setOpenSidebar(false)}
            >
              <div className="py-4 w-full text-center self-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
