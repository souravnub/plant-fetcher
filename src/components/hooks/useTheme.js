"use client";

// have to make custom hook, because hidration errors when tried making the theme change button.
// initial theme value has to be undefined as per server
// but nextTheme was using the user's system theme as initial value, causing hydration errors
import { useEffect, useState } from "react";
import { useTheme as useAppTheme } from "next-themes";

function getLsTheme() {
    const theme = localStorage.getItem("appTheme");
    return theme === "undefined" ? undefined : theme;
}

export default function useTheme() {
    const [theme, setTheme] = useState(undefined);
    const { setTheme: setAppTheme } = useAppTheme();

    useEffect(() => {
        setAppTheme(theme);
        if (theme !== undefined) {
            localStorage.setItem("appTheme", theme);
        }
    }, [theme]);

    useEffect(() => {
        if (getLsTheme() === null || getLsTheme() === undefined) {
            // if no theme is stored in local storage
            const darkThemeMq = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            if (darkThemeMq.matches) {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        } else {
            // if theme is stored in localStorage
            setTheme(getLsTheme());
        }
    }, []);

    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return {
        theme,
        toggleTheme,
        setTheme,
    };
}
