'use client';

import type { FC } from 'react';

import TextTitlePage from '@/components/atoms/TextTitlePage';

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <div>
      <TextTitlePage text="Project" />
    </div>
  );
};

export default Page;
