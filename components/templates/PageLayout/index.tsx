import type { FC, ReactNode } from 'react';

import ScreenContainer from '@/components/organisms/ScreenContainer';
import { ThemeProvider } from '@/utils/theme-provider';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScreenContainer>{children}</ScreenContainer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default PageLayout;
