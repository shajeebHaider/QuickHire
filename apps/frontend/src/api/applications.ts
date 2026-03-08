import api from '../lib/axios';

export const applicationsApi = {
  submit: (data: unknown) => api.post('/applications', data).then(r => r.data),
  getByJob: (jobId: number) => api.get(`/applications/job/${jobId}`).then(r => r.data),
  getAll: () => api.get('/applications').then(r => r.data),
  getById: (id: string | number) => api.get(`/applications/${id}`).then(r => r.data),
  updateHireStatus: (id: string | number, isHired: boolean) =>
    api.patch(`/applications/${id}/hire-status`, { isHired }).then(r => r.data),
  deleteById: (id: string | number) => api.delete(`/applications/${id}`).then(r => r.data)
};
