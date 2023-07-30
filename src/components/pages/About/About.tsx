import type { FC, JSXElementConstructor, ReactElement } from 'react';

import Hyperlink from '@/src/components/UI/Hyperlink';
import ProfilePhoto from '@/src/components/UI/ProfilePhoto';
import ProjectStack from '@/src/components/UI/ProjectCard/ProjectStack';
import { AboutTypes } from '@/src/lib/mdx/about/types';

interface AboutProps {
  meta: AboutTypes;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}

const About: FC<AboutProps> = (props) => {
  const { content, meta } = props;

  return (
    <div className="px-4 mt-4 mb-20">
      <div className="mb-2">
        <ProfilePhoto />
      </div>
      <div className="prose dark:prose-invert mx-auto text-justify lg:prose-lg ">
        <div>{content}</div>
        <h2>Current Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {meta.techStack.map((item, idx) => (
            <div
              key={idx}
              className="border border-black-main dark:border-gray-light rounded-md px-2 py-4 flex flex-row divide-x divide-solid gap-2"
            >
              <ProjectStack stack={item} size={30} />
              <div className="pl-2">{item}</div>
            </div>
          ))}
        </div>
        <h2>Contact Me</h2>
        <div className="h-1/2">
          <div className="flex flex-row justify-center">
            <Hyperlink size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
