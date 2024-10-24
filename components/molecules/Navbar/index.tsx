'use client';

import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import type { FC } from 'react';

import ButtonNavbar from '@/components/atoms/ButtonNavbar';
import DarkModeToggle from '@/components/atoms/DarkModeToggle';
import { navbarMenu } from '@/constant/navbarMenu';

// interface NavbarProps {}

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = useSpring({
    width: isScrolled ? '310px' : '100%',
    backgroundColor: isScrolled ? 'black' : 'transparent',
    config: { tension: 0, friction: 26 },
  });

  return (
    <animated.div
      style={navbarStyle}
      className={`sticky top-4 left-0 right-0 mx-auto max-w-[720px] h-16 transition-all duration-300 z-50 flex items-center justify-center p-2 rounded-full ${
        isScrolled ? 'text-white dark:text-white' : 'text-black dark:text-white'
      }`}
      // className="w-full max-w-[360px] mx-auto p-2 rounded-full flex flex-col justify-center bg-black text-white dark:bg-white dark:text-black"
    >
      <div className="w-full flex justify-between items-center">
        {navbarMenu.map((item, idx) => (
          <ButtonNavbar key={idx} path={item.path} text={item.name} />
        ))}
        <DarkModeToggle />
      </div>
    </animated.div>
  );
};

export default Navbar;
