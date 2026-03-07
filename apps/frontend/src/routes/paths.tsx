export const rootPaths = {
  root: '/'
};

export const paths = {
  home: rootPaths.root,
  jobs: '/jobs',
  jobDetails: (id: number | string) => `/job/${id}`,
  contact: '/contact',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
  applications: '/dashboard/applications'
};

export const endpoints = {};
