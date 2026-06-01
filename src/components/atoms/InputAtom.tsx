import { Input, InputProps } from "@chakra-ui/react";

export const InputAtom = (props: InputProps) => {
    return (
        <Input
            focusBorderColor="teal.500"
            errorBorderColor="red.300"
            {...props}
        />
    );
};