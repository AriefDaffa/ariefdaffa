'use client';

import { useTrail } from '@react-spring/web';
import { useEffect, useState, type FC } from 'react';

import ProjectCard from '@/components/molecules/ProjectCard';
import { ProjectMetadata } from '@/types/project-types';

interface ProjectListProps {
  project: ProjectMetadata[];
}

const ProjectList: FC<ProjectListProps> = ({ project }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trail = useTrail(project.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  });

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {trail.map((props, idx) => (
        <ProjectCard
          key={idx}
          style={props}
          desc={project[idx]?.desc}
          imageSrc={project[idx]?.imageSrc}
          title={project[idx]?.title}
          date={String(project[idx]?.date)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
