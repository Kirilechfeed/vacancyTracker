import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVacancyStatus } from "@/api/vacancy";
export const useChangeStatusVacancy = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, status }) => updateVacancyStatus(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["vacancies"] });
        },
    });
};
