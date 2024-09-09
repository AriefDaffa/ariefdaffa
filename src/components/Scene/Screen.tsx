import React from 'react';
import type { FC } from 'react';

interface ScreenProps {}

const Screen: FC<ScreenProps> = () => {
  return (
    <div className="flex dark:text-black">
      <div className="flex flex-col justify-center h-screen px-8 gap-8 max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="w-[90%]">
            <div className="text-2xl">
              Hello! I'm{' '}
              <span className="text-primary font-bold">Arief Daffa</span>
            </div>
            <div className="text-9xl font-semibold">
              A Web Developer who loves to{' '}
              <span className="text-primary">play games</span>
            </div>
          </div>
          <div
            className="w-[10%] h-full"
            style={{
              backgroundImage: 'url("/images/ornament/ornament-waves.png")',
            }}
          ></div>
        </div>
        <div className="flex gap-8">
          <div
            className="h-full w-[50%] bg-no-repeat bg-cover"
            style={{
              backgroundImage: 'url("/images/ornament/ornament-waves.png")',
            }}
          ></div>
          <div className="w-[50%] text-2xl text-justify">
            I'm Arief Daffa, a software engineer (web) who loves games too much
            that it's become an obsession—almost to the point of getting sick of
            them! 😂
          </div>
        </div>
        {/* <div className="text-center text-sm text-gray-text">
          psst... try scrolling
        </div> */}
      </div>
    </div>
  );
};

export default Screen;
