import type { FC } from 'react';

import TextTitlePage from '@/components/atoms/TextTitlePage';
import Flexer from '@/components/atoms/Flexer';
import ProjectList from '@/components/organisms/ProjectList';
import { getProjectMarkdownFiles } from '@/lib/project';

interface PageProps {}

const Page: FC<PageProps> = () => {
  const project = getProjectMarkdownFiles();
  console.log('rex', project);

  return (
    <Flexer gap={3}>
      <TextTitlePage text="Project" />
      <ProjectList project={project} />
    </Flexer>
  );
};

export default Page;
