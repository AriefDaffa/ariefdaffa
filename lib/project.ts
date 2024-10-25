import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { ProjectMetadata } from '@/types/project-types';

export interface Project extends ProjectMetadata {
  content: string;
}

const projectDir = path.join(process.cwd(), 'content/project');

export function getProjectMarkdownFiles(): Project[] {
  const fileNames = fs.readdirSync(projectDir);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(projectDir, fileName);

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      desc: data.desc,
      imageSrc: data.imageSrc,
      repo: data.repo,
      tags: data.tags,
      url: data.url,
      content,
    } as Project;
  });

  return posts;
}
