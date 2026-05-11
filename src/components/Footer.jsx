import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/Aptech_V.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Aptech Logo" className="footer-logo" />
            <p className="footer-para">
                Our college offers a range of facilities to enhance the learning experience and overall well-being
                of our students. From modern classrooms and practical labs to a supportive campus environment, we
                create a space where students can learn, build, and grow with confidence.
            </p>

            <div className="footer-links">
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>

            <p className="footer-end-text">Made with love by Kolade.</p>
        </footer>
    );
};

export default Footer;
