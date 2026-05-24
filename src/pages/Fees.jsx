import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";
import { faEnvelope, faPerson } from "@fortawesome/free-solid-svg-icons";

const Fees = () => {
    return (
        <div>
            <h1>Fees Form</h1>
            <form action="/submit-admission" className="main-form">
                <label htmlFor="">Fee Option</label>
                <div>
                    <FontAwesomeIcon icon={faPerson} />
                    <input type="text" />
                </div>
                <label htmlFor="">Fee Option</label>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="text" />
                </div>
                <label htmlFor="">Fee Option</label>
                <div>
                    <input type="text" />
                </div>
                <label htmlFor="">Fee Option</label>
                <div>
                    <input type="text" />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
                <button type="reset" className="clear-butn">
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Fees;
