'use client';

import HomeScene from '@/components/HomeScene';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className="h-screen">
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>
    </div>
  );
};

export default App;
