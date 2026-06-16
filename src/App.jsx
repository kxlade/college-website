import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Course from './pages/Course';
import Campus from './components/Campus';
import Facilities from './components/Facilites';
import Admission from './pages/Admission';
import Fees from './pages/Fees';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { Messages } from './pages/Messages';
import { Calendar } from './pages/Calendar';
import { Attendance } from './pages/Attendance';
import { Settings } from './pages/Settings';


function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <Header onNavigate={onNavigate} />
      <Course />
      <Campus />
      <Facilities />
      <Footer />
    </div>
  );
}





function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
  };

  const pageByName = {
    home: <Home onNavigate={handleNavigate} />,
    admission: <Admission />,
    dashboard: <Dashboard onNavigate={handleNavigate} />,
    course: <Course onNavigate={handleNavigate} />,
    fees: <Fees onNavigate={handleNavigate} />,
    contact: <Contact />,
    messages: <Messages onNavigate={handleNavigate} />,
    calendar: <Calendar onNavigate={handleNavigate} />,
    attendance: <Attendance onNavigate={handleNavigate} />,
    settings: <Settings onNavigate={handleNavigate} />
  };



  return (
    <>
      <div className='app-h1'>
        <h1>This Only works on Laptops and Computers with bigger Screens For Now LOL😅</h1>
      </div>

      <div className='app-h1_2'>
        <h1>Almost there!</h1>
      </div>

      <div className='app-h1_3'>
        <h1>Almosttt 🐦‍🔥🔥</h1>
      </div>

      <div className="App">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="main">
          {pageByName[currentPage] ?? <Home onNavigate={handleNavigate} />}
        </main>
      </div>
    </>

  );
}

export default App
