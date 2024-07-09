import type { FC } from 'react';

interface WavePatternProps {
  type?: 'cover' | '';
}

const WavePattern: FC<WavePatternProps> = ({ type = '' }) => {
  return (
    <div
      className="size-full bg-no-repeat"
      style={{
        backgroundImage: 'url("images/pattern.png")',
        backgroundSize: type === '' ? '500px' : 'cover',
      }}
    />
  );
};

export default WavePattern;
