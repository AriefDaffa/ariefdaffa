import mdx from '@next/mdx';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, rehypeSanitize],
  },
});

// withMDX({
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: '@mdx-js/react',
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

export default withMDX(nextConfig);
