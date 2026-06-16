import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCalendarDays, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const events = [
    { title: "Software Lab", time: "9:00 AM", location: "Lab 2" },
    { title: "Attendance Review", time: "11:30 AM", location: "Main Office" },
    { title: "Project Meeting", time: "2:00 PM", location: "Room 104" },
];

export const Calendar = ({onNavigate}) => {
        const handleNavigationClick = (page) => {
        onNavigate(page);
    };
    return (
        <section className="page-shell">
            <button onClick={() => handleNavigationClick("dashboard")} className="backButton" > <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
            <div className="page-heading">
                <p className="page-eyebrow">Academic schedule</p>
                <h1>
                    Calendar <FontAwesomeIcon icon={faCalendarDays} />
                </h1>
                <p>
                    A clean overview of the week so students can keep track of classes and key events.
                </p>
            </div>

            <div className="page-grid page-grid--calendar">
                <div className="page-card">
                    <div className="card-title-row">
                        <h2>This Week</h2>
                        <span className="card-pill">June schedule</span>
                    </div>

                    <div className="calendar-strip">
                        {weekDays.map((day, index) => (
                            <div className={`calendar-day ${index === 2 ? "calendar-day-active" : ""}`} key={day}>
                                <span>{day}</span>
                                <strong>{12 + index}</strong>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="page-card">
                    <div className="card-title-row">
                        <h2>Upcoming Events</h2>
                        <span className="card-pill">Today</span>
                    </div>

                    <div className="event-list">
                        {events.map((event) => (
                            <article className="event-item" key={event.title}>
                                <strong>{event.title}</strong>
                                <p>
                                    <FontAwesomeIcon icon={faClock} /> {event.time}
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faLocationDot} /> {event.location}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
