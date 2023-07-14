import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

import { BlogTypes } from '@/src/lib/mdx/blog/types';

const BlogCard: FC<BlogTypes> = (props) => {
  const { desc, img, title, publishedAt, slug } = props;

  return (
    <Link href={`blog/${slug}`} className=" rounded-lg hover:cursor-pointer">
      <div className="w-full h-56">
        <Image
          src={`/asset/image/blog/${img}`}
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
      <div className="py-3 h-42 flex flex-col justify-between">
        <div className="">
          <div className="text-xs dark:text-gray-light mb-1">
            Arief Daffa - {publishedAt}
          </div>
          <div className="text-lg font-bold mb-1 line-clamp-1">{title}</div>
          <div className="line-clamp-2">{desc}</div>
        </div>
        <div className="flex flex-row mt-4 justify-end">Read More</div>
      </div>
    </Link>
  );
};

export default BlogCard;
