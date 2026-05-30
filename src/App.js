import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@components/index';
import { ThemeProvider } from '@components/ThemeProvider';
import { VacanciesPage, AddVacancyPage, AnalyticsPage } from '@pages/index';
import './index.css';
function App() {
    return (_jsx(ThemeProvider, { children: _jsx(BrowserRouter, { children: _jsxs("div", { className: "min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(VacanciesPage, {}) }), _jsx(Route, { path: "/add", element: _jsx(AddVacancyPage, {}) }), _jsx(Route, { path: "/analytics", element: _jsx(AnalyticsPage, {}) })] }) }), _jsx(Footer, {})] }) }) }));
}
export default App;
