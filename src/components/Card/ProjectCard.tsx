import React from 'react';
import type { FC } from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full h-52 rounded-md overflow-hidden dark:border-gray-800">
        <img
          src={imageSrc}
          alt="x"
          //   width={200}
          //   height={200}
          className="size-full object-cover"
        />
      </div>
      <div className="py-2">
        <div className="font-semibold">{title}</div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;
