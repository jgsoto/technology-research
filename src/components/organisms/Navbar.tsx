import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../atoms/ThemeSwitch";

export const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Material Theme App
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button color="inherit" component={Link} to="/profile">
                        Profile
                    </Button>
                    <Button color="inherit" component={Link} to="/settings">
                        Settings
                    </Button>
                    <ThemeSwitch />
                </Box>
            </Toolbar>
        </AppBar>
    );
};