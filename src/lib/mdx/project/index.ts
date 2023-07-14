import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

import type { ProjectTypes } from './types';

const rootDirectory = path.join(process.cwd(), 'src', 'content');

const getProjectBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory + '/project', `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX<ProjectTypes>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllProject = async () => {
  const files = fs.readdirSync(rootDirectory + '/project');

  const projects = [];

  for (const file of files) {
    const { meta } = await getProjectBySlug(file);
    projects.push(meta);
  }

  return projects;
};
