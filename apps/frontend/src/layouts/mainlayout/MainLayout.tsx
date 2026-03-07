import type { PropsWithChildren } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import Providers from '../../providers/providers';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
};

export default MainLayout;
