import "../pages/Pages.css";

const Course = () => {

    const degrees = [{
        abv: "BCA",
        info: "The BCA course is a full time three years(six semesters) Bachelor’s Degree in Computer Application.The degree helps interested students in setting up a sound academic base for an advanced career in Computer Applications."
    },
    {
        abv: "BSC-IT",
        info: "BSc (Bachelor of Science) in IT is basically about storing, processing, securing, and managing information. This degree is primarily focused on subjects such as software, databases, and networking."
    },
    {
        abv: "BSC CA & IT",
        info: "The Bachelor of Science in (CS & IT) is an undergraduate degree course in computer applications for a duration of 3 years. The field relates to design, development and use of computer applications."
    }
    ];


    return (
        <section className="course-out">
            <div className="course-in">
                <h1>Course We Offer</h1>

                <p>Explore our diverse range of courses designed to meet the needs of aspiring professionals and experienced developers alike.</p>

                <div className="course-card">
                    {degrees.map((degree) => {
                        return (
                            <div key={degree.abv} className="degree-cont">
                                <h2 key={degree.abv} className="degree-abv">{degree.abv}</h2>
                                <p key={degree.info} className="degree-info">{degree.info} </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Course;