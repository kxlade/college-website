import "./Facilities.css";
import canteen from "../assets/canteen.png";
import auditorium from "../assets/auditorium.png";
import hostel from "../assets/hostel.png";

export default function Facilities() {
    return (
        <section>
            <div>
                <h1>Our Facilities</h1>
                <div className="facilities-img-cont">
                    <img src={canteen} alt="Students relaxing and dining in the campus canteen" className="facilities-img" />
                    <img src={auditorium} alt="A large auditorium for events and academic sessions" className="facilities-img" />
                    <img src={hostel} alt="Comfortable student hostel accommodation" className="facilities-img" />
                </div>
            </div>
        </section>
    )
}
