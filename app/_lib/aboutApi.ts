import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const aboutDirectory = join(process.cwd(), 'app', '_content', 'about');

export function getBlogSlugs() {
  return fs.readdirSync(aboutDirectory);
}

export function getAboutMeBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(aboutDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  return content as string;
}
