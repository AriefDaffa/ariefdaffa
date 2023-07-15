import { Fragment } from 'react';

import SearchBar from '@/src/components/molecules/SearchBar';
import LatestPost from '@/src/components/organisms/LatestPost';
import AllPost from '@/src/components/organisms/AllPost';
import { getAllBlog } from '@/src/lib/mdx/blog';
import BlogComponent from '@/src/components/templates/BlogComponent';

const Blog = async () => {
  const blogs = await getAllBlog();

  return (
    <div className="px-4 my-4">
      <div className="text-4xl font-bold text-center md:text-left md:text-6xl">
        Blog
      </div>
      <div className="text-center mt-2 md:text-left">
        See what i&apos;m writing here
      </div>
      <BlogComponent blogs={blogs} />
    </div>
  );
};

export default Blog;
