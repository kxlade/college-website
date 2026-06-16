import { useEffect, useState } from "react";
import "./Header.css";

const words = [
    "Frontend ",
    "Backend ",
    "Fullstack ",
    "Mobile ",
    "Data Science ",
    "AI ",
    "Cloud Computing ",
    "Cybersecurity ",
    "DevOps ",
    "Game Development ",
];

const Header = ({ onNavigate }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeoutSpeed = isDeleting ? 70 : 170;

        if (!isDeleting && charIndex === currentWord.length) {
            timeoutSpeed = 1600;
        }

        if (isDeleting && charIndex === 0) {
            timeoutSpeed = 450;
        }

        const timeoutId = setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentWord.substring(0, charIndex + 1);
                setDisplayText(nextText);
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentWord.length) {
                    setIsDeleting(true);
                }
            } else {
                const nextText = currentWord.substring(0, charIndex - 1);
                setDisplayText(nextText);
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, timeoutSpeed);

        return () => clearTimeout(timeoutId);
    }, [wordIndex, charIndex, isDeleting]);

    const handleNavigationClick = (page) => {
        onNavigate(page);
    };

    return (
        <header>
            <div className="header-main">
                <main>
                    <h1 className="course-intro">
                        We teach <span>{displayText}</span>
                        <span className="cursor"></span>
                    </h1>

                    <p className="header-para">
                        Our mission is to empower individuals with the skills and knowledge
                        needed to excel in the ever-evolving tech industry.
                    </p>

                    <button
                        className="addmision-btn"
                        onClick={() => handleNavigationClick("admission")}
                    >
                        Admission Open
                    </button> <br />
                    <button className="dashboard-btn" onClick={() => handleNavigationClick("dashboard")}>
                        School Dashboard
                    </button>
                </main>
            </div>
        </header>
    );
};

export default Header;
