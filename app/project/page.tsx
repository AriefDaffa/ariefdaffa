import Image from 'next/image';
import { BsCodeSlash } from 'react-icons/bs';
import { IoOpenOutline } from 'react-icons/io5';

import ProjectStack from '@/src/components/atoms/ProjectStack';
import { getAllProject } from '@/src/lib/mdx/project';

const Project = async () => {
  const projects = await getAllProject();

  return (
    <div className="px-4 mt-4">
      <div className="text-4xl font-bold text-center md:text-left md:text-6xl">
        Projects
      </div>
      <div className="text-center mt-2 md:text-left">
        See some of my past works here
      </div>
      {projects
        .sort((a, b) => a.id - b.id)
        .map((item, idx) => (
          <div
            key={idx}
            className="relatve my-4 rounded-lg bg-white border border-gray-dark dark:border-gray-main md:flex md:flex-row-reverse md:justify-between"
          >
            <Image
              src={`/asset/image/project/${item.img}`}
              alt=""
              className="h-44 object-cover rounded-t-lg md:rounded-tl-none md:rounded-r-lg md:w-2/5 md:h-56"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
              }
            />
            <div className="md:p-2 md:w-3/5">
              <div className="h-full p-2 flex flex-col justify-between">
                <div className="">
                  <div className="text-xl font-bold mb-2 flex flex-row gap-2 hover:text-green hover:cursor-pointer md:text-3xl">
                    {item.title}
                    <IoOpenOutline size={18} className="self-center" />
                  </div>
                  <div className="mb-1">{item.desc}</div>
                </div>

                <div className="mt-4 flex flex-row-reverse justify-between md:mt-0">
                  <div className="flex flex-row gap-2 hover:cursor-pointer">
                    Source Code{' '}
                    <BsCodeSlash size={20} className="self-center" />
                  </div>
                  <div className="flex flex-row gap-2">
                    {item.stack.map((element, idx) => (
                      <ProjectStack stack={element} key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
