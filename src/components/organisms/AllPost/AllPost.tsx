import type { FC } from 'react';

import BlogCard from '@/src/components/molecules/BlogCard';
import Pagination from '@/src/components/molecules/Pagination';

import type { AllPostPropsProps } from './types';
import Image from 'next/image';

const AllPost: FC<AllPostPropsProps> = (props) => {
  const { post } = props;

  return (
    <div className="">
      <div className="hidden text-2xl mb-2  font-semibold lg:block">
        All post
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {post.map((item, idx) => (
          <BlogCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
