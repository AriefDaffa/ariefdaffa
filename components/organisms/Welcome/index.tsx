import Typography from '@/components/atom/Typography';
import WavePattern from '@/components/atom/WavePattern';
import type { FC } from 'react';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <div className="flex flex-col gap-4 py-14">
      <div className="flex">
        <div className="w-11/12">
          <Typography type="title">
            A Web Developer who loves to read{' '}
            <span className="text-redPrimary">literature</span>
            <span className="text-white dark:text-black">(manga)</span>
          </Typography>
        </div>
        <div className="w-1/12">
          <WavePattern />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <WavePattern type="cover" />
        </div>
        <div className="w-full">
          <Typography type="title-subheader">
            I&apos;m <strong>Arief Daffa</strong>, a software engineer (web) who
            has read too many{' '}
            <span className="text-primary font-bold">literature</span> that
            it&apos;s become an obsession—almost to the point of getting sick of
            them! 😂
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
