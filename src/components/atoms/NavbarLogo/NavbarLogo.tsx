'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { useTheme } from 'next-themes';

import logoLight from '@/src/static/image/logo-light.png';
import logoDark from '@/src/static/image/logo-dark.png';

const NavbarLogo = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const themeImage = useMemo(() => {
    let src;
    switch (resolvedTheme) {
      case 'light':
        src = logoDark;
        break;
      case 'dark':
        src = logoLight;
        break;
      default:
        src = '';
        break;
    }

    return src;
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/" className="">
      {mounted ? (
        <Image
          src={themeImage}
          alt=""
          className="h-16 w-14 object-cover self-center"
        />
      ) : (
        <div className="h-16 w-14">x</div>
      )}
    </Link>
  );
};

export default NavbarLogo;
