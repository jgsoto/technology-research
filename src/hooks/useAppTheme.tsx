import { useContext, useDebugValue } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useAppTheme must be used within a ThemeProviderContext");
    }

    useDebugValue(context.mode === "dark" ? "Dark Mode Active" : "Light Mode Active");

    return context;
};
