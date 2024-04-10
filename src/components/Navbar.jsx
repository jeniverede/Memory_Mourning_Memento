import "../components-styles/NavbarStyle.css";

import { HamburgerMenu } from "./HamburgerMenu";

export function Navbar() {
    return (
        <>
            <nav className="top-nav-bar">
                <img id="logo" src="/img/home/MMM logo.jpg" alt="logo" />
                <HamburgerMenu />
            </nav>
        </>
    );
}
