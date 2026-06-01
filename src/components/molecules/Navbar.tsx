import { ButtonAtom } from "../atoms/ButtonAtom";
import { LinkAtom } from "../atoms/LinkAtom";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="navbar">
            <nav className="nav-links" aria-label="Primary navigation">
                <LinkAtom to="/">Home</LinkAtom>
                <LinkAtom to="/users">Users</LinkAtom>
                <LinkAtom to="/about">About</LinkAtom>
            </nav>

            <ButtonAtom tone="primary" type="button" onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
            </ButtonAtom>
        </header>
    );
};