import Image from 'next/image';

import { Fragment } from 'react';
import type { FC } from 'react';

import masterSword from '@/src/static/svg/master-sword.svg';
import masterSwordHorz from '@/src/static/image/master-sword-horz.png';
import aura from '@/src/static/svg/sword-aura.svg';
import auraHorz from '@/src/static/svg/sword-aura-hori.svg';

interface ImageSectionProps {}

const ImageSection: FC<ImageSectionProps> = (props) => {
  return (
    <Fragment>
      <div className="relative h-1/2 w-full lg:hidden lg:h-full lg:w-1/2">
        <Image
          src={masterSwordHorz}
          alt=""
          className="object-cover w-full h-full object-[85%]"
          priority
        />
        {/* <Image
          src={auraHorz}
          alt=""
          className="absolute object-cover top-0 w-full h-full object-[85%] -z-10 blur-3xl"
        /> */}
      </div>
      <div className="relative hidden lg:flex lg:w-1/2">
        <Image
          src={masterSword}
          alt=""
          className="object-cover w-full h-full object-top"
          priority
        />
        {/* <Image
          src={aura}
          alt=""
          className="object-cover w-full h-full object-top absolute -z-10 blur-3xl animate-pulse"
        /> */}
      </div>
    </Fragment>
  );
};

export default ImageSection;
