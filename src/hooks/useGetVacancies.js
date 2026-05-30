import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "@/api/vacancy";
export const useGetVacancies = () => {
    return useQuery({
        queryKey: ["vacancies"],
        queryFn: getVacancies,
    });
};
