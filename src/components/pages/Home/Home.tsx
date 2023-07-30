import Link from 'next/link';

import AnimateType from '@/src/components/UI/AnimateType';
import Hyperlink from '@/src/components/UI/Hyperlink';
import ImageSection from '@/src/components/UI/ImageSection';
import { message } from '@/src/constant/helloMessage';

const Home = () => {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="h-full flex flex-col-reverse lg:flex-row">
        <div className="h-1/2 flex w-full px-4 lg:h-full lg:w-1/2 ">
          <div className="self-center">
            <div className="text-center lg:text-xl lg:text-left">
              <AnimateType words={message} />
            </div>
            <div className="flex flex-row justify-center lg:justify-start">
              <div className="text-3xl self-center mr-2 lg:text-4xl">
                I&apos;m
              </div>
              <div className="text-4xl font-bold text-green lg:text-7xl">
                Arief Daffa
              </div>
            </div>
            <div className="text-center lg:text-justify">
              A software engineer (web) who has watched so many movies that
              it&apos;s become an obsession—almost to the point of getting sick
              of them! 😂
            </div>
            <div className="text-center lg:text-justify mt-4">
              Learn more{' '}
              <Link
                href={'/about'}
                className="underline underline-offset-2 font-bold"
              >
                about me
              </Link>{' '}
              and let&apos;s get to know each other!
            </div>
            <Hyperlink />
          </div>
        </div>
        <ImageSection />
      </div>
    </div>
  );
};

export default Home;
