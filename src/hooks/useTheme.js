import React from "react";
export const ThemeContext = React.createContext({
    isDark: false,
    toggleTheme: () => { },
});
export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
