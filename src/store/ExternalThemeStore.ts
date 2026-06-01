type Theme = "light" | "dark";

const STORAGE_KEY = "tanstack-router-demo-theme";
const listeners = new Set<() => void>();

const getSystemTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getThemeSnapshot = (): Theme => {
    if (typeof window === "undefined") {
        return "light";
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return getSystemTheme();
};

export const subscribeTheme = (listener: () => void) => {
    listeners.add(listener);

    const handleStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY) {
            listener();
        }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", handleStorage);
    };
};

export const setTheme = (theme: Theme) => {
    if (typeof window === "undefined") {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, theme);
    listeners.forEach((listener) => listener());
};

export const toggleTheme = () => {
    const nextTheme = getThemeSnapshot() === "light" ? "dark" : "light";
    setTheme(nextTheme);
};