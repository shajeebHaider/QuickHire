import api from "../lib/axios";

export const categoriesApi = {
  getAll: () => api.get("/categories").then(r => r.data),
  create: (data: unknown) => api.post("/categories", data).then(r => r.data),
  delete: (id: string) => api.delete(`/categories/${id}`).then(r => r.data),
};
