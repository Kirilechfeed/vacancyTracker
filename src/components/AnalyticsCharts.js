import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, } from 'recharts';
export function AnalyticsCharts({ vacancies }) {
    const applicationsPerDay = useMemo(() => {
        const grouped = {};
        vacancies.forEach(v => {
            grouped[v.dateApplied] = (grouped[v.dateApplied] || 0) + 1;
        });
        return Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([date, count]) => ({
            date: new Date(date).toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' }),
            count,
        }));
    }, [vacancies]);
    const statusDistribution = useMemo(() => {
        const grouped = {};
        vacancies.forEach(v => {
            grouped[v.status] = (grouped[v.status] || 0) + 1;
        });
        return Object.entries(grouped).map(([status, count]) => ({
            name: status,
            value: count,
        }));
    }, [vacancies]);
    const sourceDistribution = useMemo(() => {
        const grouped = {};
        vacancies.forEach(v => {
            grouped[v.source] = (grouped[v.source] || 0) + 1;
        });
        return Object.entries(grouped).map(([source, count]) => ({
            name: source,
            count,
        }));
    }, [vacancies]);
    const conversionFunnel = useMemo(() => {
        const statusOrder = ['Applied', 'Viewed', 'Interview invited', 'Interview done', 'Offer'];
        const counts = {};
        vacancies.forEach(v => {
            const idx = statusOrder.indexOf(v.status);
            if (idx !== -1) {
                for (let i = 0; i <= idx; i++) {
                    counts[statusOrder[i]] = (counts[statusOrder[i]] || 0) + 1;
                }
            }
        });
        return statusOrder.map(status => ({
            name: status,
            count: counts[status] || 0,
        }));
    }, [vacancies]);
    const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#EF4444'];
    if (vacancies.length === 0) {
        return (_jsx("div", { className: "flex items-center justify-center py-12 text-gray-500 dark:text-gray-400", children: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438" }));
    }
    return (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "\uD83D\uDCCA \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u043B\u0438\u043A\u043E\u0432 \u043F\u043E \u0434\u043D\u044F\u043C" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: applicationsPerDay, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "date", stroke: "#6b7280" }), _jsx(YAxis, { stroke: "#6b7280" }), _jsx(Tooltip, { contentStyle: {
                                        backgroundColor: '#1f2937',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                    } }), _jsx(Line, { type: "monotone", dataKey: "count", stroke: "#3B82F6", strokeWidth: 2, dot: { fill: '#3B82F6' }, activeDot: { r: 6 } })] }) })] }), _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "\uD83D\uDCCA \u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: statusDistribution, cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}`, outerRadius: 80, fill: "#8884d8", dataKey: "value", children: statusDistribution.map((_, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) })] }), _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "\uD83D\uDCCA \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: sourceDistribution, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { dataKey: "name", stroke: "#6b7280" }), _jsx(YAxis, { stroke: "#6b7280" }), _jsx(Tooltip, { contentStyle: {
                                        backgroundColor: '#1f2937',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                    } }), _jsx(Bar, { dataKey: "count", fill: "#3B82F6", radius: [8, 8, 0, 0] })] }) })] }), _jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "\uD83D\uDD25 \u0412\u043E\u0440\u043E\u043D\u043A\u0430: Applied \u2192 Offer" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: conversionFunnel, layout: "vertical", children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e5e7eb" }), _jsx(XAxis, { type: "number", stroke: "#6b7280" }), _jsx(YAxis, { type: "category", dataKey: "name", stroke: "#6b7280", width: 120 }), _jsx(Tooltip, { contentStyle: {
                                        backgroundColor: '#1f2937',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: '#fff',
                                    } }), _jsx(Bar, { dataKey: "count", fill: "#10B981", radius: [0, 8, 8, 0] })] }) })] })] }));
}
