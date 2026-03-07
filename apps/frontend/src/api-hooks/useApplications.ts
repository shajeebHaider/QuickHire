import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { applicationsApi } from "../api/applications";

export const useApplicationsByJob = (jobId: string) =>
  useQuery({ queryKey: ["applications", jobId], queryFn: () => applicationsApi.getByJob(jobId), enabled: !!jobId });

export const useSubmitApplication = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: applicationsApi.submit,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["applications"] }),
  });
};
