import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from '@components/Navigation';
import { AnalyticsCharts } from '@components/AnalyticsCharts';
import { StatsCards } from '@components/StatsCards';
import { useGetVacancies } from '@hooks/useGetVacancies';
export function AnalyticsPage() {
    const { data, isLoading } = useGetVacancies();
    if (isLoading) {
        return _jsx("div", { className: "text-center py-8", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(Navigation, {}), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430" }), _jsx(StatsCards, { vacancies: data || [] })] }), _jsx(AnalyticsCharts, { vacancies: data || [] })] })] }));
}
