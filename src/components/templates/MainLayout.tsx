import { useEffect } from "react";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../molecules/Navbar";
import { useTheme } from "../../hooks/useTheme";

export const MainLayout = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <div className="app-shell">
            <div className="page-layout stack">
                <Navbar />
                <main className="card">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};