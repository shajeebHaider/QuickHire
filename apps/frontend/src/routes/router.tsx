import { createBrowserRouter, Navigate, Outlet, type RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { paths } from './paths';
import MainLayout from '../layouts/mainlayout/MainLayout';
import Home from '../pages/Home';
import { LoadingFallback } from '../components/LoadingFallback';
import Companies from '../pages/Companies';

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
        path: paths.companies,
        element: <Companies />
      },
      {
        path: paths.contact,
        element: <div>Contact Page</div>
      },
      {
        path: paths.dashboard,
        element: <div>Dashboard Page</div>
      },
      {
        path: paths.profile,
        element: <div>Profile Page</div>
      },
      {
        path: paths.settings,
        element: <div>Settings Page</div>
      },
      {
        path: '*',
        element: <Navigate to={paths.home} replace />
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASENAME || '/'
});

export default router;
