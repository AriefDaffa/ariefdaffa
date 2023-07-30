'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { FC } from 'react';

import type { BlogTypes } from '@/src/lib/mdx/blog/types';

const NewestPostCard: FC<{ blog: BlogTypes }> = (props) => {
  const { blog } = props;

  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="my-4 h-72 flex flex-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-1/2 h-full relative ">
        <Image
          src={`/asset/image/blog/${blog.img}`}
          alt=""
          fill
          sizes="(min-width: 500px) 50vw, 100vw"
          className="object-cover rounded-[10px] border"
          placeholder="blur"
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          }
        />
      </div>
      <div className="w-1/2 py-2 px-3 flex flex-col">
        <div className="flex-1">
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
          <div className="text-sm">Arief Daffa ∙ {blog.publishedAt}</div>
          <div
            className={`text-3xl font-bold line-clamp-2 my-2 ${
              hover ? 'text-green' : ''
            }`}
          >
            {blog.title}
          </div>
          <div className="line-clamp-3">{blog.desc}</div>
        </div>
        <div className="">
          <AiOutlineArrowRight className="float-right" />
        </div>
      </div>
    </Link>
  );
};

export default NewestPostCard;
