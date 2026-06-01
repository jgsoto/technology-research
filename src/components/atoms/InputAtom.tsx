import { Input } from "@chakra-ui/react";
import type React from 'react'

export const InputAtom = (props: React.ComponentProps<typeof Input>) => {
    return <Input {...props} />
}