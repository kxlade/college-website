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


function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <Header onNavigate={onNavigate} />
      <Course />
      <Campus />
      <Facilities />
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
    course: <Course onNavigate={handleNavigate} />,
    fees: <Fees onNavigate={handleNavigate} />,
    contact: <Contact />
  };



  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} />
      <main className="main">
        {pageByName[currentPage] ?? <Home onNavigate={handleNavigate} />}
      </main>
    </div>
  );
}

export default App
