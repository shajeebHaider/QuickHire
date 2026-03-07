import { createBrowserRouter, Navigate, Outlet, type RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { paths } from './paths';
import MainLayout from '../layouts/mainlayout/MainLayout';
import Home from '../pages/Home';
import { LoadingFallback } from '../components/LoadingFallback';
import AllJobs from '../pages/AllJobs';
import JobDetails from '../pages/JobDetails';
import Dashboard from '../pages/Dashboard';
import AdminLayout from '../layouts/admin-layout/AdminLayout';
import Applications from '../pages/Applications';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: paths.jobs,
        element: <AllJobs />
      },
      {
        path: paths.jobDetails(':id'),
        element: <JobDetails />
      },
      {
        path: '*',
        element: <Navigate to={paths.home} replace />
      }
    ]
  },
  {
    path: '/dashboard',
    element: (
      <AdminLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </AdminLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: paths.applications,
        element: <Applications />
      },
      {}
    ]
  }
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASENAME || '/'
});

export default router;
