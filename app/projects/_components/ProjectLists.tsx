'use client';

import { useState, type FC } from 'react';

import type { IBlog } from '@/app/_types/IBlog';
import ProjectCard from '@/app/_components/ProjectCard';

interface ProjectListsProps {
  projects: IBlog[];
}

const ProjectLists: FC<ProjectListsProps> = ({ projects }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid gap-4 py-4 md:grid-cols-2 ">
      {projects.map((item, idx) => (
        <ProjectCard
          key={idx}
          index={idx}
          card={{ title: item.title, src: item.imageSrc }}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default ProjectLists;
