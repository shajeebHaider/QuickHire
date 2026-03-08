import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriesApi } from "../api/categories";

export const useCategories = () =>
  useQuery({ queryKey: ["categories"], queryFn: categoriesApi.getAll });

export const useCreateCategory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: categoriesApi.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["categories"] }),
  });
};
