import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '@hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
export function Header() {
    const { isDark, toggleTheme } = useTheme();
    return (_jsx("header", { className: "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold", children: "VT" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Vacancy Tracker" }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Job Application Dashboard" })] })] }), _jsx("button", { onClick: toggleTheme, className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", "aria-label": "Toggle theme", children: isDark ? (_jsx(Sun, { size: 20, className: "text-yellow-500" })) : (_jsx(Moon, { size: 20, className: "text-gray-600" })) })] }) }));
}
