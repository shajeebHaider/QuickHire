import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { applicationsApi } from '../api/applications';

export const useAppications = () =>
  useQuery({ queryKey: ['applications'], queryFn: applicationsApi.getAll });

export const useApplication = (id: string | number | undefined) => {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return useQuery({
    queryKey: ['application', numId],
    queryFn: () => applicationsApi.getById(numId!),
    enabled: !!numId && !isNaN(numId as number)
  });
};

export const useApplicationsByJob = (jobId: number) =>
  useQuery({
    queryKey: ['applications', jobId],
    queryFn: () => applicationsApi.getByJob(jobId),
    enabled: !!jobId
  });

export const useSubmitApplication = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: applicationsApi.submit,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['applications'] })
  });
};

export const useUpdateApplicationHireStatus = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, isHired }: { id: number | string; isHired: boolean }) =>
      applicationsApi.updateHireStatus(id, isHired),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ['applications'] });
      qc.invalidateQueries({ queryKey: ['application', Number(variables.id)] });
    }
  });
};

export const useDeleteApplication = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) => applicationsApi.deleteById(id),
    onSuccess: (_, id) => {
      qc.invalidateQueries({ queryKey: ['applications'] });
      qc.removeQueries({ queryKey: ['application', Number(id)] });
    }
  });
};
