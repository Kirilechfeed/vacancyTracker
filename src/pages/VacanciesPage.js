import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from '@components/Navigation';
import { VacanciesTable } from '@components/VacanciesTable';
import { useChangeStatusVacancy } from '@hooks/useChangeStatusVacancy';
import { useGetVacancies } from '@hooks/useGetVacancies';
import { useDeleteVacancy } from "@hooks/useDeleteVacancy";
export function VacanciesPage() {
    const { data, isLoading } = useGetVacancies();
    const changeStatusMutation = useChangeStatusVacancy();
    const deleteVacancyMutation = useDeleteVacancy();
    if (isLoading) {
        return _jsx("div", { className: "text-center py-8", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(Navigation, {}), _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "\u041C\u043E\u0438 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438" }), _jsx(VacanciesTable, { vacancies: data || [], onChangeStatus: changeStatusMutation.mutate, onDelete: deleteVacancyMutation.mutate })] })] }));
}
