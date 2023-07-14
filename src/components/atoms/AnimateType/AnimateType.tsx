'use client';

import { TypeAnimation } from 'react-type-animation';
import { useMemo } from 'react';
import type { FC } from 'react';

interface AnimateTypeProps {
  words: string[];
}

const AnimateType: FC<AnimateTypeProps> = (props) => {
  const { words } = props;

  const addInterval = useMemo(() => {
    const arr = [];

    for (let i = 0; i < words.length; i++) {
      arr.push(words[i], 2000);
    }

    return arr;
  }, [words]);

  return (
    <TypeAnimation
      sequence={addInterval}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={1}
    />
  );
};

export default AnimateType;
