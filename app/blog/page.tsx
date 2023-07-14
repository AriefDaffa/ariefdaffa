import { Fragment } from 'react';

import SearchBar from '@/src/components/molecules/SearchBar';
import LatestPost from '@/src/components/organisms/LatestPost';
import AllPost from '@/src/components/organisms/AllPost';
import { getAllBlog } from '@/src/lib/mdx/blog';

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
      <div className="">
        <div className="my-4">
          <SearchBar />
        </div>
        {blogs.length > 4 && (
          <div className="hidden text-xl mb-2 font-semibold lg:block">
            Latest Post
          </div>
        )}
        {blogs.length > 0 ? (
          <Fragment>
            {blogs.length > 3 && <LatestPost post={blogs} />}
            <AllPost post={blogs} />
          </Fragment>
        ) : (
          <div>Posts empty</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
