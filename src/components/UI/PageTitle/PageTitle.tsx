import type { FC, ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const { children, subTitle, title } = props;

  return (
    <div className="px-4 my-4">
      <div className="text-4xl font-bold text-center  md:text-6xl">{title}</div>
      <div className="text-center mt-2 italic">{subTitle}</div>
      {children}
    </div>
  );
};

export default PageTitle;
