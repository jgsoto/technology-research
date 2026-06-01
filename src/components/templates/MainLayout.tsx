import type { ReactNode } from "react";
import { Container, Box } from "@mui/material";
import { Navbar } from "../organisms/Navbar";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Box sx={{ minH: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                {children}
            </Container>
        </Box>
    );
};