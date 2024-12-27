'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { useMemo, useState, type FC } from 'react';

import ProjectCard from '@/app/projects/_components/ProjectList/ProjectCard';
import Modal from '@/app/_components/Modal';
import StackIcon from './ProjectCard/StackIcon';
import ProjectFilter from './ProjectFilter';
import { formatDate } from '@/app/_utils/formatDate';
import type { IBlog } from '@/app/_types/IBlog';

interface ProjectListProps {
  projects: IBlog[];
}

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<IBlog>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tags = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.tags))),
    [projects]
  );

  const handleOpenModal = (data: IBlog) => {
    setSelectedProject(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectTags = (tags: string) => {
    if (selectedTags.indexOf(tags) > -1) {
      const filteredTags = selectedTags.filter((item) => item !== tags);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags((oldArr) => [...oldArr, tags]);
    }
  };
  return (
    <div className="">
      <ProjectFilter
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handleSelectTags={handleSelectTags}
      />
      <div className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
        {projects
          .filter((item) =>
            selectedTags.length > 0
              ? item.tags.some((tag) => selectedTags.includes(tag))
              : item
          )
          .map((item, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              card={item}
              hovered={hovered}
              setHovered={setHovered}
              handleOpenModal={handleOpenModal}
            />
          ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col gap-4">
          <Image
            src={selectedProject?.imageSrc || ''}
            alt=""
            width={800}
            height={800}
            className="w-full rounded-t-md"
          />
          <div className="flex flex-col gap-4 px-4">
            <div className="text-4xl font-bold">{selectedProject?.title}</div>
            <div className="text-gray-600 text-sm">
              <a
                href={selectedProject?.url}
                target="_blank"
                className="hover:text-primary"
              >
                {selectedProject?.url}
              </a>{' '}
              | {formatDate(selectedProject?.date)}
            </div>
            <div className="text-center flex gap-2">
              {selectedProject?.tags.map((item, idx) => (
                <div className="" key={idx}>
                  <StackIcon type={item} />
                </div>
              ))}
            </div>
            <div className="">{selectedProject?.desc}</div>
            {selectedProject?.repo && (
              <a
                href={selectedProject?.repo}
                target="_blank"
                className="text-white flex gap-2 items-center px-4 py-2 rounded-lg bg-gray-800 cursor-pointer w-full max-w-[200px] hover:brightness-75"
              >
                <FaGithub />
                Github Repository
              </a>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectList;
