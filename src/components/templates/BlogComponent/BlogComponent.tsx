'use client';

import { Fragment, useState, useCallback, useMemo } from 'react';
import { TbMoodEmpty } from 'react-icons/tb';
import type { FC, ChangeEvent } from 'react';

import SearchBar from '@/src/components/molecules/SearchBar';
import LatestPost from '@/src/components/organisms/LatestPost';
import AllPost from '@/src/components/organisms/AllPost';
import BlogCard from '@/src/components/molecules/BlogCard';
import type { BlogTypes } from '@/src/lib/mdx/blog/types';

const BlogComponent: FC<{ blogs: BlogTypes[] }> = (props) => {
  const { blogs } = props;

  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  const filteredBlogs = useMemo(() => {
    return blogs.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [blogs, keyword]);

  return (
    <div className="">
      <div className="my-4">
        <SearchBar keyword={keyword} onChange={handleKeywordChange} />
      </div>
      {keyword.length === 0 ? (
        <Fragment>
          {blogs.length > 4 && (
            <div className="hidden text-xl mb-2 font-semibold lg:block">
              Latest Post
            </div>
          )}
          {blogs.length > 0 ? (
            <Fragment>
              {blogs.length > 3 && <LatestPost post={blogs} />}
              <hr className="my-8 h-0.5 border-t-0 bg-gray-dark opacity-100 dark:bg-gray-light" />
              <AllPost post={blogs?.sort((a, b) => b.id - a.id)} />
            </Fragment>
          ) : (
            <div>Posts empty</div>
          )}
        </Fragment>
      ) : (
        <div>
          <div className="hidden text-xl mb-2 font-semibold lg:block">
            Search Result
          </div>
          {filteredBlogs.length > 0 ? (
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
              {filteredBlogs.map((item, idx) => (
                <BlogCard key={idx} {...item} />
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center h-96">
              <div className="flex flex-col justify-center align-middle">
                <TbMoodEmpty size={100} />
                <div>Post not found</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
