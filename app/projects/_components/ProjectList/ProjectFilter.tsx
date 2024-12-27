import type { Dispatch, FC, SetStateAction } from 'react';

import { cn } from '@/app/_lib/cn';

interface ProjectFilterProps {
  selectedTags: string;
  tags: string[];
  setSelectedTags: Dispatch<SetStateAction<string>>;
  handleSelectTags: (item: string) => void;
}

const ProjectFilter: FC<ProjectFilterProps> = ({
  tags,
  selectedTags,
  setSelectedTags,
  handleSelectTags,
}) => {
  return (
    <div className="flex justify-center gap-4 py-8 flex-wrap">
      <div
        className={cn(
          'py-1 px-4 rounded-full cursor-pointer hover:bg-primary hover:text-white',
          selectedTags.length === 0 && 'bg-primary text-white'
        )}
        onClick={() => setSelectedTags('')}
      >
        All
      </div>
      {tags.map((item, idx) => (
        <div
          className={cn(
            'py-1 px-4 rounded-full hover:bg-primary hover:text-white cursor-pointer',
            selectedTags.indexOf(item) > -1 && 'bg-primary text-white'
          )}
          onClick={() => handleSelectTags(item)}
          key={idx}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectFilter;
