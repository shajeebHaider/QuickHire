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
  applications: '/dashboard/applications',
  addjob: '/dashboard/add-new-job',
  editJob: (id: number | string) => `/dashboard/edit-job/${id}`,
  editApplication: (id: number | string) => `/dashboard/edit-application/${id}`
};

export const endpoints = {};
