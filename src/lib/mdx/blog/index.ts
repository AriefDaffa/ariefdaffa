import fs from 'fs';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import rehypeSanitize from 'rehype-sanitize';
import { compileMDX } from 'next-mdx-remote/rsc';

import type { BlogTypes } from './types';

const rootDirectory = path.join(process.cwd(), 'src', 'content');

export const getBlogBySlug = async (slug: string) => {
  let validLink = true;
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory + '/blog', `${realSlug}.mdx`);

  let fileContent = '';

  try {
    fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  } catch (readOrJsonErr) {
    fileContent = '';
    validLink = false;
  }

  const { frontmatter, content } = await compileMDX<BlogTypes>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypeSlug, rehypeSanitize] },
    },
  });

  return { meta: { ...frontmatter, slug: realSlug, validLink }, content };
};

export const getAllBlog = async () => {
  const files = fs.readdirSync(rootDirectory + '/blog');

  const projects = [];

  for (const file of files) {
    const { meta } = await getBlogBySlug(file);
    projects.push(meta);
  }

  return projects;
};
