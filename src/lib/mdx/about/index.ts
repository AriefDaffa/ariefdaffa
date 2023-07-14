import fs from 'fs';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import rehypeSanitize from 'rehype-sanitize';
import { compileMDX } from 'next-mdx-remote/rsc';

import type { AboutTypes } from './types';

const rootDirectory = path.join(process.cwd(), 'src', 'content');

export const getAbout = async () => {
  let isValidSlug = true;
  const filePath = path.join(rootDirectory + '/about', `about.mdx`);

  let fileContent = '';

  try {
    fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  } catch (readOrJsonErr) {
    fileContent = '';
    isValidSlug = false;
  }

  const { frontmatter, content } = await compileMDX<AboutTypes>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypeSlug, rehypeSanitize] },
    },
  });

  return { meta: { ...frontmatter, slug: 'about', isValidSlug }, content };
};
