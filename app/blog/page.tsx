import { Metadata } from 'next';
import type { FC } from 'react';

import BlogCard from './_components/BlogCard';
import PageWrapper from '../_components/PageWrapper';
import { getAllPosts } from '../_lib/blogApi';
import { formatDate } from '../_utils/formatDate';

export const metadata: Metadata = {
  title: 'Blog Post | Personal Website',
  description: 'Created by using Next.js and Tailwindcss',
};

const Page: FC = () => {
  const blogs = getAllPosts();

  return (
    <PageWrapper>
      <div className="w-full flex gap-4 pb-2 pt-8">
        <div className="w-full space-y-6">
          {blogs.map((item, idx) => (
            <BlogCard
              key={idx}
              url={`blog/${item.slug}`}
              title={item.title}
              date={formatDate(item.date)}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
