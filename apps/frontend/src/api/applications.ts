import api from "../lib/axios";

export const applicationsApi = {
  submit: (data: unknown) => api.post("/applications", data).then(r => r.data),
  getByJob: (jobId: string) => api.get(`/applications/job/${jobId}`).then(r => r.data),
};
