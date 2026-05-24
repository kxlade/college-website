import { faEnvelope, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";

const Contact = () => {
    return (
        <div>
            <h1>Contact Form</h1>
            <form action="/submit-admission" className="main-form">
                <label htmlFor="name">Your Name :</label>
                <div>
                    <FontAwesomeIcon icon={faPerson} />
                    <input type="text" id="name" name="name" required />
                </div>

                <label htmlFor="email">Email Address:</label>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" id="email" name="email" required />
                </div>

                <label htmlFor="message">Message :</label>
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <textarea id="message" name="message" required />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
                <button type="reset" className="clear-butn">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Contact;
