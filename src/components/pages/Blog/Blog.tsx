'use client';

import { useState, useCallback, useMemo } from 'react';
import type { FC, ChangeEvent } from 'react';

import NewestPostCard from '@/src/components/UI/NewestPostCard';
import PostCard from '@/src/components/UI/PostCard';
import SearchBar from '@/src/components/UI/SearchBar';
import Pagination from '@/src/components/UI/Pagination';
import type { BlogTypes } from '@/src/lib/mdx/blog/types';

const Blog: FC<{ blogs: BlogTypes[] }> = (props) => {
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
    <div className="pb-6">
      <div className="hidden md:block">
        <div className="text-2xl font-semibold mt-6 ">Latest Posts</div>
        <NewestPostCard blog={blogs[blogs.length - 1]} />
      </div>
      <div className="text-2xl font-semibold mt-6 hidden md:block">
        All Posts
      </div>
      <SearchBar keyword={keyword} onChange={handleKeywordChange} />
      <div className="grid gap-3 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredBlogs
          .sort((a, b) => b.id - a.id)
          .map((item, idx) => (
            <PostCard blog={item} key={idx} />
          ))}
      </div>
      {/* <div className="flex flex-row justify-center mt-6">
        <Pagination />
      </div> */}
    </div>
  );
};

export default Blog;
