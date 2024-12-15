import { Metadata } from 'next';
import type { FC } from 'react';

import { getAllProjects } from '@/app/_lib/projectApi';
import ProjectLists from './_components/ProjectLists';
import PageWrapper from '../_components/PageWrapper';

export const metadata: Metadata = {
  title: 'Project List | Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const Page: FC = () => {
  const projects = getAllProjects();

  return (
    <PageWrapper>
      <ProjectLists projects={projects} />
    </PageWrapper>
  );
};

export default Page;
