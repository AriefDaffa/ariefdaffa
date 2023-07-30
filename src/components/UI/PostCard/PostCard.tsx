'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { FC } from 'react';

import type { BlogTypes } from '@/src/lib/mdx/blog/types';

const PostCard: FC<{ blog: BlogTypes }> = (props) => {
  const { blog } = props;

  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="h-96 flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-1/2 w-full relative ">
        <Image
          src={`/asset/image/blog/${blog.img}`}
          alt=""
          fill
          sizes="(min-width: 200px) 50vw, 100vw"
          className="object-cover rounded-[10px] border dark:border-black-main"
          placeholder="blur"
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          }
        />
      </div>
      <div className="h-1/2 w-full pt-2 flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 mb-2">
            {blog.tags.map((item, idx) => (
              <div
                key={idx}
                className="border border-black-main dark:border-white-main rounded-full px-2 py-1 text-xs"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="text-xs">Arief Daffa ∙ {blog.publishedAt}</div>
          <div
            className={`text-lg font-bold line-clamp-1 my-1 flex-1 ${
              hover ? 'text-green' : ''
            }`}
          >
            {blog.title}
          </div>
          <div className="text-sm line-clamp-2">{blog.desc}</div>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <AiOutlineArrowRight className="float-right self-end" />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
