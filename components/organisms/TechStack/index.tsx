'use client';

import Image from 'next/image';
import type { FC } from 'react';

import { techStack } from '@/constant/tech-stack';
import Typography from '@/components/atom/Typography';
import WavePattern from '@/components/atom/WavePattern';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = () => {
  return (
    <div className="size-full flex items-center flex-col md:flex-row">
      <div className="size-full max-w-[30rem] min-h-screen grid grid-cols-2 gap-4 md:p-8">
        {techStack.map((item, idx) => (
          <div
            key={idx}
            className="size-full shadow-md rounded-md border border-gray-200 flex justify-center items-center relative"
          >
            <Image
              src={item.urlImg}
              alt=""
              width={100}
              height={100}
              className="absolute"
            />
          </div>
        ))}
      </div>
      <div className="w-full pt-14 md:pt-0">
        <Typography type="title">
          My <span className="text-redPrimary">current</span> tech stack
        </Typography>
        <Typography type="title-subheader" className="italic text-gray-400">
          just... this? -x
        </Typography>
        <Typography type="title-subheader" className="italic text-gray-400">
          duhhh ofc not... just wait, it&apos;s gonna keep expanding further! -z
        </Typography>
      </div>
    </div>
  );
};

export default TechStack;
