import { notFound } from 'next/navigation';

import BlogDetails from '@/src/components/pages/Blog/BlogDetails';
import { getAllBlog, getBlogBySlug } from '@/src/lib/mdx/blog';

export const generateStaticParams = async () => {
  const blogs = await getAllBlog();
  return blogs.map((item) => ({
    slug: item.slug,
  }));
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content, meta } = await getBlogBySlug(params.slug);

  if (!meta.validLink) {
    notFound();
  }

  return <BlogDetails meta={meta} content={content} />;
};

export default Page;
