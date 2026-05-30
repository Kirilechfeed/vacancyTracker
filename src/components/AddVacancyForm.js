import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { extractSourceFromUrl, validateUrl } from '@lib/utils';
import { X } from 'lucide-react';
export function AddVacancyForm({ onAdd }) {
    const [url, setUrl] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('Applied');
    const [comment, setComment] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!url.trim()) {
            setError('URL вакансии обязателен');
            return;
        }
        if (!validateUrl(url)) {
            setError('Некорректный URL');
            return;
        }
        if (!company.trim()) {
            setError('Название компании обязательно');
            return;
        }
        if (!position.trim()) {
            setError('Должность обязательна');
            return;
        }
        const source = extractSourceFromUrl(url);
        const newVacancy = {
            id: Date.now().toString(),
            url,
            company,
            position,
            source,
            status,
            dateApplied: new Date().toISOString().split('T')[0],
            comment: comment || '',
            tags: tags.length > 0 ? tags : [],
            followUpDate: '',
        };
        onAdd(newVacancy);
        setUrl('');
        setCompany('');
        setPosition('');
        setStatus('Applied');
        setComment('');
        setTags([]);
        setTagInput('');
    };
    const addTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };
    const removeTag = (tag) => {
        setTags(tags.filter(t => t !== tag));
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white mb-4", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E" }), error && (_jsx("div", { className: "mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg", children: error })), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "URL \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 *" }), _jsx("input", { type: "url", value: url, onChange: (e) => setUrl(e.target.value), placeholder: "https://linkedin.com/jobs/...", className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F *" }), _jsx("input", { type: "text", value: company, onChange: (e) => setCompany(e.target.value), placeholder: "Google, Meta \u0438 \u0442.\u0434.", className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C *" }), _jsx("input", { type: "text", value: position, onChange: (e) => setPosition(e.target.value), placeholder: "Senior Frontend Developer", className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "\u0421\u0442\u0430\u0442\u0443\u0441" }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { children: "Applied" }), _jsx("option", { children: "Viewed" }), _jsx("option", { children: "Interview invited" }), _jsx("option", { children: "Interview done" }), _jsx("option", { children: "Offer" }), _jsx("option", { children: "Rejected" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439" }), _jsx("textarea", { value: comment, onChange: (e) => setComment(e.target.value), placeholder: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u043E\u0442\u043A\u043B\u0438\u043A\u0435...", rows: 3, className: "w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: "\u0422\u0435\u0433\u0438 (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E)" }), _jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx("input", { type: "text", value: tagInput, onChange: (e) => setTagInput(e.target.value), onKeyPress: handleKeyPress, placeholder: "remote, junior, frontend...", className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("button", { type: "button", onClick: addTag, className: "px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" })] }), tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => (_jsxs("span", { className: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center gap-2", children: [tag, _jsx("button", { type: "button", onClick: () => removeTag(tag), className: "hover:text-red-600", children: _jsx(X, { size: 14 }) })] }, tag))) }))] }), _jsx("button", { type: "submit", className: "w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors", children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E" })] })] }));
}
