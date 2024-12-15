import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import type { IBlog } from '../_types/IBlog';

const projectDirectory = join(process.cwd(), 'app', '_content', 'project');

export function getProjectSlugs() {
  return fs.readdirSync(projectDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as IBlog;
}

export function getAllProjects(): IBlog[] {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
