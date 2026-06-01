import { Switch } from "@mui/material";
import { useAppTheme } from "../../hooks/useAppTheme";

export const ThemeSwitch = () => {
    const { mode, toggleTheme } = useAppTheme();

    return (
        <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            color="default"
            slotProps={{
                input: { "aria-label": "theme toggle switch" }
            }}
        />
    );
};