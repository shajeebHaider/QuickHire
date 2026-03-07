import api from '../lib/axios';

export const applicationsApi = {
  submit: (data: unknown) => api.post('/applications', data).then(r => r.data),
  getByJob: (jobId: number) => api.get(`/applications/job/${jobId}`).then(r => r.data),
  getAll: () => api.get('/applications').then(r => r.data),
  getById: (id: string | number) => api.get(`/applications/${id}`).then(r => r.data)
};
