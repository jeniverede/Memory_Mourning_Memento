import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../components-styles/HamburgerMenuStyle.css";

export function HamburgerMenu() {
    useEffect(() => {
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelectorAll('.nav__link');

        const handleNavToggleClick = () => {
            document.body.classList.toggle('nav-open');
        };

        const handleNavLinkClick = () => {
            document.body.classList.remove('nav-open');
        };

        const handleCloseMenu = () => {
            document.body.classList.remove('nav-open');
        };

        if (navToggle) {
            navToggle.addEventListener('click', handleNavToggleClick);
        }

        navLinks.forEach((link) => {
            link.addEventListener('click', handleNavLinkClick);
        });

        // Add event listener to window to detect new tab opening
        window.addEventListener('focus', handleCloseMenu);

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', handleNavToggleClick);
            }

            navLinks.forEach((link) => {
                link.removeEventListener('click', handleNavLinkClick);
            });

            // Remove event listener when component unmounts
            window.removeEventListener('focus', handleCloseMenu);
            
        };
    }, []);

    return (
        <div className="hamburger-menu-container">
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/exhibition" className="nav__link">Exhibition</Link></li>
                    <ul className="nested-pages">
                        {/* /url name allow access to nested pages defined as Routes/Route in App.jsx */}
                        <li><Link to="/mourning" target="_blank">Mourning - Room 1</Link></li>
                        <li><Link to="/memory" target="_blank">Memory - Room 2</Link></li>
                        <li><Link to="/memento" target="_blank">Memento - Room 3</Link></li>
                        <li><Link to="/design-venue" target="_blank">Design & Venue</Link></li>
                        <li><Link to="/promotional-material" target="_blank">Promotional Material</Link></li>
                    </ul>
                    <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                    <li className="nav__item"><Link to="/credits" className="nav__link">Credits</Link></li>
                    <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}