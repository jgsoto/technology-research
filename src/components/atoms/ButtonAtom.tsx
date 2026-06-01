import { Button } from "@chakra-ui/react";
import type React from 'react'

type ButtonAtomProps = React.ComponentProps<typeof Button> & { label: string }

export const ButtonAtom = ({ label, ...props }: ButtonAtomProps) => {
    return <Button {...props}>{label}</Button>
}