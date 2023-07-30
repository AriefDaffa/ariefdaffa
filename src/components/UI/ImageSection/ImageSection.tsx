import Image from 'next/image';

import { Fragment } from 'react';
import type { FC } from 'react';

import masterSword from '@/src/static/svg/master-sword.svg';
import masterSwordHorz from '@/src/static/image/master-sword-horz.png';

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
      </div>
      <div className="relative hidden lg:flex lg:w-1/2">
        <Image
          src={masterSword}
          alt=""
          className="object-cover w-full h-full object-top"
          priority
        />
      </div>
    </Fragment>
  );
};

export default ImageSection;
