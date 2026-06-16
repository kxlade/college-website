import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";
import {
    faBell,
    faCalendar,
    faCog,
    faDashboard,
    faDatabase,
    faEnvelope,
    faListDots,
    faMessage,
    faPhoneVolume,
    faSearch,
    faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faSignalMessenger } from "@fortawesome/free-brands-svg-icons";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons/faDownLeftAndUpRightToCenter";
import { useState } from "react";

export const Dashboard = ({ onNavigate }) => {
    const dashButtons = [
        { icon: faDashboard, label: "Dashboard", pageName: "dashboard" },
        { icon: faSignalMessenger, label: "Messages", pageName: "messages" },
        { icon: faCalendar, label: "Calendar", pageName: "calendar" },
        { icon: faDatabase, label: "Database", pageName: "database" },
        { icon: faUserCheck, label: "Attendance", pageName: "attendance" },
        { icon: faCog, label: "Settings", pageName: "settings" },
    ];

    const tableData = [
        {
            name: "Gururaj",
            id: "001",
            className: "SY BCA",
            age: 19,
            gender: "Male",
            email: "gururaj@icloud.com",
        },
        {
            name: "Zoey",
            id: "002",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "zoey@icloud.com",
        },
        {
            name: "Zion",
            id: "003",
            className: "SY BCA",
            age: 19,
            gender: "HIM",
            email: "zion@icloud.com",
        },
        {
            name: "Keshy",
            id: "004",
            className: "SY BCA",
            age: 19,
            gender: "Male",
            email: "keshy@icloud.com",
        },
        {
            name: "Sade",
            id: "005",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "sade@icloud.com",
        },
        {
            name: "Chloe",
            id: "006",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "chloe@icloud.com",
        },
        {
            name: "Seyi",
            id: "007",
            className: "SY BCA",
            age: 19,
            gender: "Male",
            email: "seyi@icloud.com",
        },
        {
            name: "Bola",
            id: "008",
            className: "SY BCA",
            age: 19,
            gender: "Male",
            email: "bola@icloud.com",
        },
        {
            name: "Tory",
            id: "009",
            className: "SY BCA",
            age: 19,
            gender: "Male",
            email: "tory@icloud.com",
        },
        {
            name: "Felicia",
            id: "010",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "felicia@icloud.com",
        },
        {
            name: "Korty",
            id: "011",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "korty@icloud.com",
        },
        {
            name: "Sarah",
            id: "012",
            className: "SY BCA",
            age: 19,
            gender: "Female",
            email: "sarah@icloud.com",
        },
    ];

    const handleNavigationClick = (page) => {
        onNavigate(page);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenSideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container ">
            <aside className="left_sidebar">
                <div className="close_hamburger_btn">
                    <i className="bx bx-x-circle"></i>
                </div>
                <div className="logo ">
                    <h2 onClick={() => console.log("School clicked")}>School</h2>
                </div>
                <div className="menu_items ">
                    {dashButtons.map((button, index) => (
                        <button
                            className="menu_item "
                            key={index}
                            onClick={() => handleNavigationClick(button.pageName)}
                        >
                            <FontAwesomeIcon icon={button.icon} />
                            {button.label}
                        </button>
                    ))}
                </div>
            </aside>

            <div className="main_content">
                <div className="left_right_sidebar_opener">
                    <div className="hamburger">
                        <i className="bx bx-menu"></i>
                    </div>
                    <div className="student">
                        <div className="profile_img">
                            <img src="src/assets/img-1.jpg" alt="profile img" />
                        </div>
                        <div className="profile_name">
                            <p>Kery Roy</p>
                        </div>
                    </div>
                </div>

                <div className="main_navbar">
                    <div className="search_box">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text " placeholder="Search" />
                    </div>
                </div>
                <div className="menu_item_name_and_filter ">
                    <div className="menu_item_name">
                        <h2>Database</h2>
                    </div>
                    <div className="filter_and_sort">
                        <select name="sort" id="sort" className="sort sort_and_filter">
                            <option value="sort">Sort</option>
                            <option value="name">Name</option>
                            <option value="age">Age</option>
                            <option value="className">ClassName</option>
                        </select>
                        <select
                            name="filter"
                            id="filter"
                            className="filter sort_and_filter"
                        >
                            <option value="filter">Filter</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="tabs">
                    <div className="tab_name">
                        <button
                            className="tab_button"
                            onClick={() => console.log("Student clicked")}
                        >
                            Student
                        </button>
                        <button
                            className="tab_button"
                            onClick={() => console.log("Teacher clicked")}
                        >
                            Teacher
                        </button>
                        <button
                            className="tab_button"
                            onClick={() => console.log("Staff clicked")}
                        >
                            Staff
                        </button>
                    </div>
                    <div className="three_dots">
                        <FontAwesomeIcon icon={faListDots} />
                    </div>
                </div>
                <div className="table">
                    <table>
                        <tr className="table_head">
                            <th>Name</th>
                            <th>ID</th>
                            <th>Class</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                        {tableData.map((table) => {
                            return (
                                <tr key={table.id}>
                                    <td className="profile_name"> {table.name} </td>
                                    <td> {table.id} </td>
                                    <td> {table.className} </td>
                                    <td> {table.age} </td>
                                    <td> {table.gender} </td>
                                    <td> {table.email} </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>

            <aside className="right_sidebar" style={{ flexBasis: isOpen ? '50%' : '20%' }}>
                <div className="notification_and_name ">
                    <button className="close_btn " onClick={handleOpenSideBar}>
                        <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                    </button>
                    |
                    <button className="bell ">
                        <FontAwesomeIcon icon={faBell} />
                        <span className="bell-dot"></span>
                    </button>
                    <br />
                    <img src="src/assets/img-1.jpg " alt="profile " /> &nbsp; &nbsp;
                    <p>Kery Roy</p>
                    <i className="bx bx-chevron-down"></i>
                </div>
                <div className="profile ">
                    <div className="img ">
                        <img src="src/assets/image.png " alt="studentImg " className={isOpen ? 'side-open' : 'side-closed'} />
                    </div>
                    <div className="name_and_className ">
                        <p>Hermione Granger</p>
                        <span>BCA Student</span>
                    </div>
                    <div className="contact_info ">
                        <FontAwesomeIcon icon={faMessage} />
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="about ">
                        <h4>About</h4>
                        <p>
                            BCA student studied at ABC School of Commerce and Computer
                            studies. I really enjoy solving problems as well as making things
                            pretty and easy to use. I can't stop learning new things; the
                            more, the better.
                        </p>
                    </div>
                    <div className="other_info ">
                        <div className="age ">
                            <h4>Age</h4>
                            <p>18</p>
                        </div>
                        <div className="gender ">
                            <h4>Gender</h4>
                            <p>Female</p>
                        </div>
                        <div className="dob ">
                            <h4>DOB</h4>
                            <p>12/11/2006</p>
                        </div>
                        <div className="address ">
                            <h4>Address</h4>
                            <p>USA</p>
                        </div>
                    </div>
                    <div className="student_from_same_className ">
                        <div className="student_same_className_heading ">
                            <h4>Student from the same class</h4>
                        </div>
                        <div className="student_same_className_img ">
                            <img src="src/assets/img-2.jpg " alt="img " />
                            <img src="src/assets/img1.jpg " alt="img " />
                            <img src="src/assets/img2.jpg " alt="img " />
                            <img
                                src="src/assets/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg "
                                alt="img "
                            />
                            <img src="src/assets/news2.jpg " alt="img " />
                            <span>+12 More</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};
