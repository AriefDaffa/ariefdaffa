import ProjectCard from '@/src/components/UI/ProjectCard';

import type { FC } from 'react';
import type { ProjectTypes } from '@/src/lib/mdx/project/types';

interface ProjectProps {
  projects: ProjectTypes[];
}

const Project: FC<ProjectProps> = (props) => {
  const { projects } = props;

  return (
    <div className="mt-10 grid gap-2 md:gap-6">
      {projects
        .sort((a, b) => a.id - b.id)
        .map((item, idx) => (
          <ProjectCard project={item} key={idx} />
        ))}
    </div>
  );
};

export default Project;
