import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVacancy } from "@/api/vacancy";
export const useAddVacancy = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (vacancy) => addVacancy(vacancy),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["vacancies"] });
        },
    });
};
