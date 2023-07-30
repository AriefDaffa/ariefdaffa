'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import profileDark from '@/src/static/svg/hylian-dark.svg';
import profileLight from '@/src/static/svg/hylian-light.svg';
import image from '@/src/static/image/profile.png';

interface ProfilePhotoProps {}

const ProfilePhoto: FC<ProfilePhotoProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const themeImage = useMemo(() => {
    let src;
    switch (resolvedTheme) {
      case 'light':
        src = profileLight;
        break;
      case 'dark':
        src = profileDark;
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
    <div className="relative ">
      <Image
        src={image}
        alt=""
        className=" object-cover z-40 w-full md:w-1/2 mx-auto "
        placeholder="blur"
      />
      {/* <Image
        src={profileOrnament}
        alt=""
        className="drop-shadow-2xl object-cover sm:h-96 sm:drop-shadow-none blur-sm"
      /> */}
    </div>
  );
};

export default ProfilePhoto;
