import type { FC } from 'react';

interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
  return <div style={{ width, height }} className="animate-pulse" />;
};

export default Skeleton;
