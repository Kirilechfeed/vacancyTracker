import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVacancy } from "@/api/vacancy";

export const useDeleteVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteVacancy(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
  });
};
