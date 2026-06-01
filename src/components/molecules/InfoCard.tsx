import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

interface InfoCardProps {
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick: () => void;
}

export const InfoCard = ({ title, description, buttonLabel, onButtonClick }: InfoCardProps) => {
    return (
        <Card sx={{ minWidth: 275, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={onButtonClick}>
                    {buttonLabel}
                </Button>
            </CardActions>
        </Card>
    );
};