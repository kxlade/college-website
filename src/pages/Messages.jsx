import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeftLong,
    faClock,
    faEnvelope,
    faInbox,
    faPaperPlane,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

const inboxMessages = [
    {
        sender: "Admission Office",
        subject: "Documents received",
        preview: "Your marksheet has been added to the admission list for review.",
        time: "10 min ago",
    },
    {
        sender: "Student Support",
        subject: "Fee reminder",
        preview: "The next fee deadline is coming up at the end of this week.",
        time: "1 hour ago",
    },
    {
        sender: "Class Coordinator",
        subject: "Attendance update",
        preview: "Your attendance record has been updated after today's lecture.",
        time: "Yesterday",
    },
];

export const Messages = ({ onNavigate }) => {
    const handleNavigationClick = (page) => {
        onNavigate(page);
    };
    return (
        <section className="page-shell">
            <button onClick={() => handleNavigationClick("dashboard")} className="backButton" > <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
            <div className="page-heading">
                <p className="page-eyebrow">Student communication</p>
                <h1>
                    Messages <FontAwesomeIcon icon={faInbox} />
                </h1>
                <p>
                    A simple inbox for notices, reminders, and replies from the college team.
                </p>
            </div>

            <div className="page-grid page-grid--messages">
                <div className="page-card">
                    <div className="card-title-row">
                        <h2>Inbox</h2>
                        <span className="card-pill">
                            <FontAwesomeIcon icon={faEnvelope} /> 3 new
                        </span>
                    </div>

                    <div className="message-list">
                        {inboxMessages.map((message) => (
                            <article className="message-item" key={message.subject}>
                                <div className="message-meta">
                                    <strong>{message.sender}</strong>
                                    <span>{message.subject}</span>
                                </div>
                                <p>{message.preview}</p>
                                <div className="message-footer">
                                    <span>
                                        <FontAwesomeIcon icon={faUser} /> Student desk
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faClock} /> {message.time}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="page-card">
                    <div className="card-title-row">
                        <h2>Compose Reply</h2>
                        <span className="card-pill">
                            <FontAwesomeIcon icon={faPaperPlane} /> Quick note
                        </span>
                    </div>

                    <form className="message-form">
                        <label htmlFor="to">To</label>
                        <input type="text" id="to" name="to" placeholder="Admission Office" />

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Question about admission" />

                        <label htmlFor="reply">Message</label>
                        <textarea
                            id="reply"
                            name="reply"
                            placeholder="Write a short message here..."
                        />

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
