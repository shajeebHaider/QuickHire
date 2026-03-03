import type { PropsWithChildren } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
