import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import type { FC, JSXElementConstructor, ReactElement } from 'react';

import TableOfContent from '@/src/components/UI/TableOfContent';
import type { BlogTypes } from '@/src/lib/mdx/blog/types';

interface BlogDetailsProps {
  meta: BlogTypes;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}

const BlogDetails: FC<BlogDetailsProps> = (props) => {
  const { meta, content } = props;

  return (
    <div>
      <Link href={'/blog'} className="flex flex-row w-min">
        <IoIosArrowBack className="self-center" />
        Back
      </Link>
      <div className="flex flex-row my-4 px-2">
        <div className="prose w-full prose-p:text-justify prose-img:w-full prose-img:h-[150px] prose-img:object-cover prose-img:my-0 prose-h1:mt-4 prose-h1:mb-1 prose-h2:mt-4 prose-p:mb-0 dark:prose-invert target:prose-h1:scroll-mt-[64px] target:prose-h2:scroll-mt-[64px] 100px md:prose-img:h-[450px] lg:w-3/4 md:prose-xl ">
          <div className="h-max">
            <div className="flex flex-row gap-2">
              {meta?.tags?.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-black-dark dark:border-gray-light rounded-full px-2 py-1 text-sm "
                >
                  {item}
                </div>
              ))}
            </div>
            <h1 id={meta?.slug} className="prose-h1:mb-1">
              {meta?.title}
            </h1>
            <div className="mb-4 text-sm">
              Arief Daffa - {meta?.publishedAt}
            </div>
            <div className="h-1/2 w-full object-cover lg:h-[450px]">
              <Image
                src={`/asset/image/blog/${meta?.img}`}
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
          </div>
          <div>{content}</div>
        </div>
        <TableOfContent content={content} />
      </div>
    </div>
  );
};

export default BlogDetails;
