'use client';

import { Suspense } from 'react';

import HomeScene from '@/components/HomeScene';

const App = () => {
  return (
    <div className="h-screen relative">
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>
    </div>
  );
};

export default App;
