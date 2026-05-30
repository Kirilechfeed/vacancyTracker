import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ThemeContext } from '@hooks/useTheme';
export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined')
            return false;
        return localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
    return (_jsx(ThemeContext.Provider, { value: { isDark, toggleTheme: () => setIsDark(!isDark) }, children: children }));
}
