'use client';

import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import type { FC } from 'react';

interface TextTitlePageProps {
  text: string;
}

const TextTitlePage: FC<TextTitlePageProps> = ({ text }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animateStyle = useSpring({
    from: { opacity: 0, x: -10 },
    to: { opacity: mounted ? 1 : 0, x: mounted ? 0 : -10 },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <animated.div style={animateStyle} className="text-7xl font-semibold">
      {mounted ? text : ''}
    </animated.div>
  );
};

export default TextTitlePage;
