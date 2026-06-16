import { useState } from "react";
import "../pages/Pages.css";
import personCoding from "../assets/person-coding.jpg";
import codingImage from "../assets/coding-image.webp";
import laptopSession from "../assets/a-man-with-laptop.jpg";
import programmers from "../assets/two-programmers-staring-at-a-screen.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const courses = [
    {
        name: "Software Engineering",
        image: programmers,
        alt: "Students collaborating on software engineering projects",
        summary:
            "Build the mindset and technical depth needed to design, develop, test, and maintain modern software products.",
        focus: ["Programming fundamentals", "Web application architecture", "Testing and team-based project delivery"],
    },
    {
        name: "Data Science",
        image: codingImage,
        alt: "A student working with analytics and data science tools",
        summary:
            "Learn how to collect, clean, analyze, and visualize data so you can turn raw information into business decisions.",
        focus: ["Python for analysis", "Statistics and data storytelling", "Machine learning foundations"],
    },
    {
        name: "Cybersecurity",
        image: personCoding,
        alt: "A cybersecurity student reviewing secure systems on a computer",
        summary:
            "Understand how to secure systems, identify vulnerabilities, and protect networks, applications, and users from attacks.",
        focus: ["Network and endpoint security", "Ethical hacking basics", "Risk management and security operations"],
    },
    {
        name: "Cloud Computing & DevOps",
        image: laptopSession,
        alt: "A learner working on cloud computing and DevOps workflows",
        summary:
            "Master the tools and workflows used to deploy applications, automate delivery pipelines, and manage scalable infrastructure.",
        focus: ["Cloud platforms and deployment", "CI/CD and automation", "Containers, monitoring, and reliability"],
    },
    {
        name: "Mobile App Development",
        image: personCoding,
        alt: "A student developing mobile applications",
        summary:
            "Create responsive mobile applications with strong user flows, clean code structure, and production-ready features.",
        focus: ["Cross-platform development", "API integration", "Performance, publishing, and maintenance"],
    },
    {
        name: "UI/UX Design",
        image: laptopSession,
        alt: "A learner designing user interface and user experience projects",
        summary:
            "Design digital experiences that are attractive, usable, and aligned with how real people interact with products.",
        focus: ["User research and wireframing", "Visual design systems", "Prototyping and usability testing"],
    },
];

const Course = () => {
    const [openCourse, setOpenCourse] = useState(courses[0].name);

    const toggleCourse = (courseName) => {
        setOpenCourse((currentCourse) => (currentCourse === courseName ? "" : courseName));
    };

    return (
        <section className="course-out">
            <div className="course-in">
                <div className="course-heading">
                    <p className="course-eyebrow">Career-focused programs</p>
                    <h1>Courses We Offer <FontAwesomeIcon icon={faBook} /> </h1>
                    <p>
                        Explore industry-relevant courses designed to help students build practical skills,
                        confidence, and a strong path into today&apos;s digital careers.
                    </p>
                </div>

                <div className="course-card">
                    {courses.map((course, index) => {
                        const isOpen = openCourse === course.name;
                        const panelId = `course-panel-${index}`;

                        return (
                            <article key={course.name} className={`degree-cont ${isOpen ? "degree-cont-open" : ""}`}>
                                <img src={course.image} alt={course.alt} className="degree-image" />

                                <div className="degree-copy">
                                    <div className="degree-top-row">
                                        <h2 className="degree-abv">{course.name}</h2>
                                        <button
                                            type="button"
                                            className="degree-toggle"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            onClick={() => toggleCourse(course.name)}
                                        >
                                            {isOpen ? "Hide info" : "View info"}
                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div id={panelId} className="degree-details">
                                            <p className="degree-info">{course.summary}</p>
                                            <ul className="degree-focus-list">
                                                {course.focus.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Course;
