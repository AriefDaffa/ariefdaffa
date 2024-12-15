import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import type { IPost } from '../_types/IPost';

const blogDirectory = join(process.cwd(), 'app', '_content', 'blog');

export function getBlogSlugs() {
  return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as IPost;
}

export function getAllPosts(): IPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
