'use client';

import { Fragment, useState, useCallback, useMemo } from 'react';
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
              <AllPost post={blogs} />
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
            <div>Posts not found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
