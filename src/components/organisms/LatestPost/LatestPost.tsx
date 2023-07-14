import Image from 'next/image';
import { Fragment } from 'react';
import type { FC } from 'react';

import BlogCard from '@/src/components/molecules/BlogCard';

import type { LatestPostProps } from './types';

const LatestPost: FC<LatestPostProps> = (props) => {
  const { post } = props;

  const [firstPost] = post;

  return (
    <Fragment>
      <div className="hidden text-2xl mb-2 font-semibold lg:block">
        Latest Post
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="">
          <BlogCard {...firstPost} />
        </div>
        <div className="lg:grid lg:gap-4">
          {post?.slice(0, 3)?.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-main rounded-lg flex flex-row justify-between"
            >
              <div className="h-full w-40">
                <Image
                  src={`/asset/image/blog/${item.img}`}
                  alt=""
                  className="w-full h-full rounded-l-lg object-cover"
                  placeholder="blur"
                  width={500}
                  height={500}
                  blurDataURL={
                    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                  }
                />
              </div>
              <div className="p-3 max-w-xs">
                <div className="text-xs dark:text-gray-light mb-1">
                  Arief Daffa - 20 Jan 2023
                </div>
                <div className="text-lg font-bold mb-1 line-clamp-1">
                  {item.title}
                </div>
                <div className="line-clamp-2">{item.desc}</div>
                <div className="flex flex-row mt-4 justify-end">Read More</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LatestPost;
