'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { FC, JSXElementConstructor, ReactElement } from 'react';

interface TableOfContentProps {
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}

const TableOfContent: FC<TableOfContentProps> = (props) => {
  const { content } = props;

  const [title, setTitle] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3');

    const arr: { id: string; text: string }[] = [];

    headings.forEach((item) => {
      const id = item.id;
      const text = item.textContent + '';

      arr.push({ id, text: text.replace(/^a-zA-Z0-9 ]/g, '') });
    });

    setTitle(arr);
  }, [content]);

  return (
    <div className="hidden w-1/4 px-4 sticky top-[100px] h-min lg:block">
      <div className="text-xl font-bold mb-4">Table of Contents</div>
      {title.map((item, idx) => (
        <a
          href={`#${item.id}`}
          key={idx}
          className="my-2 hover:cursor-pointer hover:font-bold line-clamp-1"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default TableOfContent;
