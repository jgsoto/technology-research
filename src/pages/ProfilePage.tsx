import { Typography, Box } from "@mui/material";
import { InfoCard } from "../components/molecules/InfoCard";

export const ProfilePage = () => {
    const handleEditProfile = () => {
        // Action will be implemented when needed
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h4" component="h2">
                User Profile
            </Typography>
            <Typography variant="body1">
                Manage your personal information and view your account details.
            </Typography>
            <Box sx={{ maxWidth: 400 }}>
                <InfoCard
                    title="John Doe"
                    description="Email: john.doe@example.com\nRole: Systems Engineer"
                    buttonLabel="Edit Profile"
                    onButtonClick={handleEditProfile}
                />
            </Box>
        </Box>
    );
};