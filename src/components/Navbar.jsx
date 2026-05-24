import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/Aptech_V.png";

const navItems = [
    { label: "Home", page: "home" },
    { label: "Admission", page: "admission" },
    { label: "Course", page: "course" },
    { label: "Fees", page: "fees" },
];

export default function Navbar({ currentPage, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigationClick = (page) => {
        setIsMenuOpen(false);
        onNavigate(page);
    };

    return (
        <div className={`site-header ${isMenuOpen ? "menu-open" : ""}`} id="home">
            <nav className="nav-cont" aria-label="Primary">
                <button
                    type="button"
                    className="brand"
                    onClick={() => handleNavigationClick("home")}
                >
                    <span className="brand-copy">
                        <img src={logo} alt="Aptech Logo" className="brand-badge" />
                    </span>
                </button>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-expanded={isMenuOpen}
                    aria-label={
                        isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                    }
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
                    {navItems.map((item) => {
                        const isActive = currentPage === item.page;

                        return (
                            <button
                                key={item.page}
                                type="button"
                                aria-description={item.label}
                                aria-label={item.label}
                                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => handleNavigationClick(item.page)}
                            >
                                <p className="fade-para">
                                    {item.label} <br /> <FontAwesomeIcon icon={faArrowDown} />
                                </p>
                                {item.label}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        className={`nav-cta ${currentPage === "contact" ? "nav-cta-active" : ""}`}
                        aria-current={currentPage === "contact" ? "page" : undefined}
                        onClick={() => handleNavigationClick("contact")}
                    >
                        Contact Us <FontAwesomeIcon icon={faContactBook} />
                    </button>
                </div>
            </nav>
            <button
                type="button"
                className={`nav-backdrop ${isMenuOpen ? "is-open" : ""}`}
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
            />
        </div>
    );
}
