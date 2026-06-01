import { Checkbox, CheckboxProps } from "@chakra-ui/react";

interface CheckboxAtomProps extends CheckboxProps {
    label?: string;
}

export const CheckboxAtom = ({ label, ...props }: CheckboxAtomProps) => {
    return (
        <Checkbox colorScheme="teal" {...props}>
            {label}
        </Checkbox>
    );
};