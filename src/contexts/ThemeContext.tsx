import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { ThemeContextProps } from "../Interfaces/ThemeContextInterface";

const defaultThemeContextValues: ThemeContextProps = {
    theme: "light",
    handleToggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(
    defaultThemeContextValues
);

const ThemeProvider: FC = ({ children }) => {
    const [userTheme, setUserTheme] = useState(defaultThemeContextValues.theme);

    useEffect(() => {
        const storedTheme = localStorage.getItem("todo-user-theme") || "light";
        const root = window.document.documentElement;

        root.classList.add(storedTheme);
        setUserTheme(storedTheme);
    }, []);

    const handleToggleTheme = () => {
        const root = window.document.documentElement;
        const themeColor = userTheme === "dark" ? "light" : "dark";

        root.classList.remove(userTheme);
        root.classList.add(themeColor);

        localStorage.setItem("todo-user-theme", themeColor);
        setUserTheme(themeColor);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: userTheme,
                handleToggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
