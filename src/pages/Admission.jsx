import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

const Admission = () => {
    return (
        <div>
            <h1>Admission Form</h1>
            <form action="/submit-admission" className="main-form">
                <label htmlFor="name">Name :</label>
                <div>
                    <FontAwesomeIcon icon={faPerson} />
                    <input type="text" id="name" name="name" required />
                </div>

                <label htmlFor="email">Email :</label>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" id="email" name="email" required />
                </div>

                <label htmlFor="phone">Phone :</label>
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <input type="tel" id="phone" name="phone" required />
                </div>

                <label htmlFor="male">Gender :</label>
                <div className="gender-options">
                    <label className="gender-option" htmlFor="male">
                        <input type="radio" className="radio" id="male" name="gender" value="male" required />
                        <span>Male</span>
                    </label>

                    <label className="gender-option" htmlFor="female">
                        <input type="radio" className="radio" id="female" name="gender" value="female" required />
                        <span>Female</span>
                    </label>

                    <label className="gender-option" htmlFor="other">
                        <input type="radio" className="radio" id="other" name="gender" value="other" required />
                        <span>Other</span>
                    </label>
                </div>

                <label htmlFor="dob">Date Of Birth</label>
                <input type="date" name="dob" id="dob" required />

                <label htmlFor="course">Course</label>
                <select name="course" id="course" required>
                    <option value="">Select a course</option>
                    <option value="software-engineering">Software Engineering</option>
                    <option value="data-science">Data Science</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-computing-devops">Cloud Computing & DevOps</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                </select>

                <label htmlFor="file">12th Marksheet</label>
                <input type="file" id="file" />

                <label htmlFor="pw">Password</label>
                <input type="password" name="password" id="pw" placeholder="Enter your password" required />

                <label htmlFor="confirm-pw">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-pw"
                    placeholder="Enter to confirm your password"
                    required
                />

                <button type="submit" className="submit-btn">Submit</button>
                <button type="reset" className="clear-butn">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Admission;
