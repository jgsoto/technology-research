import { Typography, Box } from "@mui/material";
import { InfoCard } from "../components/molecules/InfoCard";

export const SettingsPage = () => {
    const handleResetSettings = () => {
        // Action will be implemented when needed
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h4" component="h2">
                Application Settings
            </Typography>
            <Typography variant="body1">
                Customize your experience and configure global preference behaviors.
            </Typography>
            <Box sx={{ maxWidth: 400 }}>
                <InfoCard
                    title="Theme Preferences"
                    description="You can switch between standard light theme and high-contrast dark theme directly from the header."
                    buttonLabel="Reset to Default"
                    onButtonClick={handleResetSettings}
                />
            </Box>
        </Box>
    );
};