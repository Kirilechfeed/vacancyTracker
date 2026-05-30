import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVacancyStatus } from "@/api/vacancy";
import { VacancyStatus } from "@/types/index";
export const useChangeStatusVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: VacancyStatus }) =>
      updateVacancyStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
  });
};
