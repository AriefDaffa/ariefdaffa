import { usePathname } from 'next/navigation';
import type { FC } from 'react';

const TitleNav: FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-end">
      <div className="w-full flex justify-end max-w-[1600px]">
        <div className="flex flex-col justify-between px-8 py-4 w-full">
          {pathname === '/' ? (
            <div className="xl:w-[60%] text-2xl ">
              A{' '}
              <span className="text-primary font-semibold">Web Developer</span>{' '}
              who loves reading novel that it&apos;s become an obsession—almost
              to the point of getting sick of them!
            </div>
          ) : (
            <div className="text-xl md:text-6xl font-bold line-clamp-2 leading-loose lg:text-8xl h-full">
              {pathname}
            </div>
          )}
          <div className="text-gray-500 text-sm">© Arief Daffa 2024</div>
        </div>
      </div>
    </div>
  );
};

export default TitleNav;
