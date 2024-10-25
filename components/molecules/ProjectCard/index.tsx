import Image from 'next/image';
import { animated } from '@react-spring/web';
import { FC } from 'react';

import Flexer from '@/components/atoms/Flexer';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  date: string;
  style: {};
}

const ProjectCard: FC<ProjectCardProps> = ({
  desc,
  imageSrc,
  title,
  date,
  style,
}) => {
  return (
    <animated.div style={style} className="p-2 rounded-md flex">
      <div className="w-1/2">
        <Flexer gap={1}>
          {/* <div>{date}</div> */}
          <div className="font-semibold">{title}</div>
          <div className="line-clamp-3">{desc}</div>
        </Flexer>
      </div>
      <Image
        alt=""
        width={600}
        height={600}
        src={imageSrc}
        className="rounded-md mb-4 w-1/2"
      />
    </animated.div>
  );
};

export default ProjectCard;
