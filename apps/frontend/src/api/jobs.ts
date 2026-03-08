import api from '../lib/axios';

export const jobsApi = {
  getAll: () => api.get('/jobs').then(r => r.data),
  getById: (id: number) => api.get(`/job/${id}`).then(r => r.data),
  create: (data: unknown) => api.post('/jobs', data).then(r => r.data),
  update: (id: number, data: unknown) => api.patch(`/job/${id}`, data).then(r => r.data),
  delete: (id: number) => api.delete(`/job/${id}`).then(r => r.data)
};
