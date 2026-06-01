import type { InputHTMLAttributes } from 'react'

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>

export function CustomInput(props: CustomInputProps) {
    return <input className="custom-input" {...props} />
}