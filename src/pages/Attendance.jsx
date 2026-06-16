import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCheckCircle, faCircleExclamation, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

const attendanceRows = [
    { name: "Gururaj", className: "SY BCA", status: "Present" },
    { name: "Zoey", className: "SY BCA", status: "Present" },
    { name: "Zion", className: "SY BCA", status: "Late" },
    { name: "Keshy", className: "SY BCA", status: "Absent" },
];



export const Attendance = ({ onNavigate }) => {
    const handleNavigationClick = (page) => {
        onNavigate(page);
    };

    return (
        <section className="page-shell">
            <button onClick={() => handleNavigationClick("dashboard")} className="backButton" > <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
            <div className="page-heading">
                <p className="page-eyebrow">Class tracking</p>
                <h1>
                    Attendance <FontAwesomeIcon icon={faUserCheck} />
                </h1>
                <p>
                    A small attendance summary for keeping an eye on class presence and regularity.
                </p>
            </div>

            <div className="stats-row">
                <div className="stat-card">
                    <strong>92%</strong>
                    <span>Overall attendance</span>
                </div>
                <div className="stat-card">
                    <strong>24</strong>
                    <span>Present today</span>
                </div>
                <div className="stat-card">
                    <strong>3</strong>
                    <span>Need follow-up</span>
                </div>
            </div>

            <div className="page-card">
                <div className="card-title-row">
                    <h2>Today's Register</h2>
                    <span className="card-pill">
                        <FontAwesomeIcon icon={faCheckCircle} /> Updated
                    </span>
                </div>

                <div className="table-wrap">
                    <table className="simple-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceRows.map((student) => (
                                <tr key={student.name}>
                                    <td>{student.name}</td>
                                    <td>{student.className}</td>
                                    <td>
                                        <span className={`status-badge status-${student.status.toLowerCase()}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="helper-note">
                    <FontAwesomeIcon icon={faCircleExclamation} /> This is a basic view for now, keeping the focus on a
                    quick daily check.
                </p>
            </div>
        </section>
    );
};
