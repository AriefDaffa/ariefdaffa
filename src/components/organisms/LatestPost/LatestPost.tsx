import Image from 'next/image';
import Link from 'next/link';
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
          <Link
            href={`blog/${firstPost.slug}`}
            className="h-full flex flex-col hover:cursor-pointer "
          >
            <div className="w-full h-72">
              <Image
                src={`/asset/image/blog/${firstPost.img}`}
                alt=""
                className="w-full h-full object-cover"
                placeholder="blur"
                width={500}
                height={500}
                blurDataURL={
                  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                }
              />
            </div>
            <div className="flex flex-col justify-between pt-3 flex-1">
              <div className="h-full">
                <div className="text-xs dark:text-gray-light mb-1">
                  Arief Daffa - {firstPost.publishedAt}
                </div>
                <div className="text-lg font-bold mb-1 line-clamp-1">
                  {firstPost.title}
                </div>
                <div className="line-clamp-3">{firstPost.desc}</div>
              </div>
              <div className="flex flex-row mt-4 justify-end">Read More</div>
            </div>
          </Link>
        </div>
        <div className="lg:grid lg:gap-4">
          {post
            ?.slice(1, 4)
            ?.sort((a, b) => b.id - a.id)
            ?.map((item, idx) => (
              <Link
                href={`blog/${item.slug}`}
                key={idx}
                className="flex flex-row justify-between"
              >
                <div className="w-40 h-40">
                  <Image
                    src={`/asset/image/blog/${item.img}`}
                    alt=""
                    className="w-full h-full object-cover"
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
                  <div className="flex flex-row mt-4 justify-end">
                    Read More
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LatestPost;
