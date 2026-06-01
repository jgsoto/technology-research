import { Link } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

type AppPath = "/" | "/users" | "/about";

type LinkAtomProps = PropsWithChildren<{
    to: AppPath;
}>;

export const LinkAtom = ({ to, children }: LinkAtomProps) => {
    return (
        <Link
            to={to}
            activeOptions={{ exact: true }}
            activeProps={{ className: "nav-link nav-link-active" }}
            inactiveProps={{ className: "nav-link" }}
        >
            {children}
        </Link>
    );
};