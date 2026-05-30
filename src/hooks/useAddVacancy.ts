import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVacancy } from "@/api/vacancy";
import { Vacancy } from "@/types/index";
export const useAddVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (vacancy: Vacancy) => addVacancy(vacancy),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vacancies"] });
    },
  });
};
