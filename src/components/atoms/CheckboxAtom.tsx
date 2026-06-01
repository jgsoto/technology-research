import { Checkbox } from "@chakra-ui/react";
import type React from 'react'

type CheckboxAtomProps = React.ComponentProps<typeof Checkbox> & { label?: string }

export const CheckboxAtom = ({ label, children, ...props }: CheckboxAtomProps) => {
    return (
        <Checkbox {...props}>
            {children ?? label}
        </Checkbox>
    )
}