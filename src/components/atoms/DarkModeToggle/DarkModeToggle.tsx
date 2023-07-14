'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useMemo, useState, useEffect } from 'react';
import type { FC } from 'react';

const DarkModeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, resolvedTheme, setTheme } = useTheme();

  const themeImage = useMemo(() => {
    let src;
    switch (resolvedTheme) {
      case 'light':
        src = '/asset/image/misc/sunny.png';
        break;
      case 'dark':
        src = '/asset/image/misc/moon.png';
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
    <div
      className="w-10 px-2 hover:cursor-pointer"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <Image
        src={themeImage}
        alt=""
        width={40}
        height={40}
        placeholder="blur"
        blurDataURL={
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        }
      />
    </div>
  );
};

export default DarkModeToggle;
