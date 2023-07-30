import Image from 'next/image';
import { BsCodeSlash } from 'react-icons/bs';
import { IoOpenOutline } from 'react-icons/io5';
import type { FC } from 'react';

import ProjectStack from './ProjectStack';

import type { ProjectTypes } from '@/src/lib/mdx/project/types';

interface ProjectProps {
  project: ProjectTypes;
}

const ProjectCard: FC<ProjectProps> = (props) => {
  const { project } = props;

  return (
    <div className="h-96 flex flex-col md:h-56 md:flex-row-reverse">
      <div className="h-1/2 relative md:h-full md:w-1/2">
        <Image
          src={`/asset/image/project/${project.img}`}
          alt=""
          fill
          sizes="(min-width: 500px) 50vw, 100vw"
          className="object-cover rounded-[10px] border dark:border-black-main"
          placeholder="blur"
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          }
        />
      </div>
      <div className="h-1/2 flex flex-col md:h-full md:w-1/2 md:pr-4">
        <div className="flex-1">
          <div className="flex flex-row flex-wrap gap-2 mt-1 md:mt-2">
            {project.stack.map((element, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-1 py-1 px-2 border rounded-md border-black-main dark:border-white-main"
              >
                <ProjectStack stack={element} />
                <div className="text-sm">{element}</div>
              </div>
            ))}
          </div>
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold my-1 flex flex-row gap-1 w-fit hover:text-green hover:cursor-pointer md:text-3xl md:my-2"
          >
            {project.title}
            <IoOpenOutline size={18} className="self-center" />
          </a>
          <div className="text-sm md:text-md">{project.desc}</div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-end"
        >
          <BsCodeSlash
            size={20}
            className="self-center hover:text-green hover:cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
