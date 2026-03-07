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
  settings: '/settings'
};

export const endpoints = {};
