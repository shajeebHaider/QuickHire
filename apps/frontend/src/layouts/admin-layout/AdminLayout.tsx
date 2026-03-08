import type { PropsWithChildren } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import Providers from '../../providers/providers';

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="flex flex-1">
        <Sidebar />
        <Providers>{children}</Providers>
      </div>
    </div>
  );
};

export default AdminLayout;
