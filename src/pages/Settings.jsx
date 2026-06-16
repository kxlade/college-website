import { faGear, faBell, faUser, faLock, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";

export const Settings = ({ onNavigate }) => {
    const handleNavigationClick = (page) => {
        onNavigate(page);
    };

    return (
        <section className="page-shell">
            <button onClick={() => handleNavigationClick("dashboard")} className="backButton" > <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
            <div className="page-heading">
                <p className="page-eyebrow">Account preferences</p>
                <h1>
                    Settings <FontAwesomeIcon icon={faGear} />
                </h1>
                <p>
                    Keep the essentials here: profile details, alerts, and simple account options.
                </p>
            </div>

            <div className="page-grid page-grid--settings">
                <div className="page-card">
                    <div className="card-title-row">
                        <h2>
                            <FontAwesomeIcon icon={faUser} /> Profile
                        </h2>
                    </div>

                    <form className="settings-form">
                        <label htmlFor="display-name">Display name</label>
                        <input type="text" id="display-name" defaultValue="Kery Roy" />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" defaultValue="kery.roy@college.edu" />

                        <label htmlFor="course">Course</label>
                        <input type="text" id="course" defaultValue="SY BCA" />
                    </form>
                </div>

                <div className="page-card">
                    <div className="card-title-row">
                        <h2>
                            <FontAwesomeIcon icon={faBell} /> Notifications
                        </h2>
                    </div>

                    <div className="settings-list">
                        <label className="setting-row" htmlFor="email-alerts">
                            <span>Email alerts</span>
                            <input type="checkbox" id="email-alerts" defaultChecked />
                        </label>
                        <label className="setting-row" htmlFor="attendance-reminders">
                            <span>Attendance reminders</span>
                            <input type="checkbox" id="attendance-reminders" defaultChecked />
                        </label>
                        <label className="setting-row" htmlFor="result-updates">
                            <span>Result updates</span>
                            <input type="checkbox" id="result-updates" />
                        </label>
                    </div>

                    <div className="security-box">
                        <FontAwesomeIcon icon={faLock} />
                        <div>
                            <strong>Password</strong>
                            <p className="text-muted">Use a strong password and change it when needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
