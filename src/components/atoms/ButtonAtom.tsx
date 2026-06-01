import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonAtomProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    tone?: "primary" | "default";
};

export const ButtonAtom = ({ children, tone = "default", className, ...props }: ButtonAtomProps) => {
    const toneClassName = tone === "primary" ? "button button--primary" : "button";

    return (
        <button className={[toneClassName, className].filter(Boolean).join(" ")} {...props}>
            {children}
        </button>
    );
};