import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSpotify,
  BiLogoDocker,
  BiLogoNodejs,
  BiLogoJava,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMdx, SiMysql } from 'react-icons/si';
import type { FC } from 'react';

interface ProjectStackProps {
  stack: string;
  size?: number;
}

const ProjectStack: FC<ProjectStackProps> = (props) => {
  const { stack, size = 20 } = props;

  switch (stack) {
    case 'Typescript':
      return <BiLogoTypescript size={size} />;
    case 'TypeScript':
      return <BiLogoTypescript size={size} />;
    case 'React':
      return <BiLogoReact size={size} />;
    case 'ReactJS':
      return <BiLogoReact size={size} />;
    case 'Spotify':
      return <BiLogoSpotify size={size} />;
    case 'mdx':
      return <SiMdx size={size} />;
    case 'Docker':
      return <BiLogoDocker size={size} />;
    case 'NextJS':
      return <TbBrandNextjs size={size} />;
    case 'NodeJS':
      return <BiLogoNodejs size={size} />;
    case 'Java':
      return <BiLogoJava size={size} />;
    case 'MySQL':
      return <SiMysql size={size} />;
    default:
      return <></>;
  }
};

export default ProjectStack;
