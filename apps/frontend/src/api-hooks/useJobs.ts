import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { jobsApi } from "../api/jobs";

export const useJobs = () =>
  useQuery({ queryKey: ["jobs"], queryFn: jobsApi.getAll });

export const useJob = (id: string | number | undefined) => {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return useQuery({ 
    queryKey: ["jobs", numId], 
    queryFn: () => jobsApi.getById(numId!), 
    enabled: !!numId && !isNaN(numId as number)
  });
};

export const useCreateJob = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: jobsApi.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["jobs"] }),
  });
};

export const useDeleteJob = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: jobsApi.delete,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["jobs"] }),
  });
};