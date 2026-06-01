import { useSyncExternalStore } from "react";
import { getThemeSnapshot, subscribeTheme, toggleTheme } from "../store/ExternalThemeStore";

export const useTheme = () => {
    const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "light");

    return {
        theme,
        toggleTheme,
    };
};