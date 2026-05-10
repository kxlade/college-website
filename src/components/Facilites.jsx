import "./Facilities.css";
export default function Facilities() {
    return (
        <section>
            <div>
                <h1>Our Facilities</h1>
                <div className="facilities-img-cont">
                    <img src="src/assets/canteen.png" alt="" className="facilities-img" />
                    <img src="src/assets/auditorium.png" alt="" className="facilities-img" />
                    <img src="src/assets/hostel.png" alt="" className="facilities-img" />
                </div>

                <footer className="footer">
                    <img src="src/assets/Aptech_V.png" alt="" className="footer-logo"/>
                    <p>
                        Our college offers a range of facilities to enhance the learning experience and overall well-being of our students. From state-of-the-art classrooms and laboratories to a well-stocked library, we provide an environment conducive to academic excellence. Additionally, our campus features recreational areas, sports facilities, and comfortable hostels to ensure a holistic college experience for all our students.
                    </p>
                </footer>
            </div>
        </section>
    )
}