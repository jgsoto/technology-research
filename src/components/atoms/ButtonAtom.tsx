import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonAtomProps extends ButtonProps {
    label: string;
}

export const ButtonAtom = ({ label, ...props }: ButtonAtomProps) => {
    return (
        <Button {...props}>
            {label}
        </Button>
    );
};