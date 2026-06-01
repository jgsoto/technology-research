import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type CustomButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export function CustomButton({ children, ...props }: CustomButtonProps) {
    return (
        <button className="custom-button" {...props}>
            {children}
        </button>
    )
}