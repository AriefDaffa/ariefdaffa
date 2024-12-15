'use client';
import Image from 'next/image';
import { memo } from 'react';
import { cn } from '@/app/_lib/cn';
import type { Dispatch, SetStateAction } from 'react';

interface ProjectCardProps {
  card: {
    title: string;
    src: string;
  };
  index: number;
  hovered: number | null;
  setHovered: Dispatch<SetStateAction<number | null>>;
}

const ProjectCard = memo(
  ({ card, index, hovered, setHovered }: ProjectCardProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-lg cursor-pointer relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out'
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
          hovered === index ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
