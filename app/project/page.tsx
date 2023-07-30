import PageTitle from '@/src/components/UI/PageTitle';
import Project from '@/src/components/pages/Project';
import { getAllProject } from '@/src/lib/mdx/project';

const ProjectPage = async () => {
  const projects = await getAllProject();

  return (
    <PageTitle title="Projects" subTitle="My Personal Project Adventure">
      <Project projects={projects} />
    </PageTitle>
  );
};

export default ProjectPage;
