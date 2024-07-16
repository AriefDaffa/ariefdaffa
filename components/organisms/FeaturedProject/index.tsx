import Typography from '@/components/atom/Typography';
import WavePattern from '@/components/atom/WavePattern';
import type { FC } from 'react';

interface FeaturedProjectProps {}

const FeaturedProject: FC<FeaturedProjectProps> = () => {
  return (
    <div className="size-full">
      <div className="w-full flex justify-end">
        <div className="w-full max-w-96 h-14">
          <WavePattern />
        </div>
      </div>
      <div className="pt-14">
        <Typography type="header">featured project</Typography>
      </div>
    </div>
  );
};

export default FeaturedProject;
