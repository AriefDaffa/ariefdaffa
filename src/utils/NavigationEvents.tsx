'use client';

import NProgress from 'nprogress';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}
