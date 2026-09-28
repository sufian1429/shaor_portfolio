import React, { useState } from 'react'; 
import './components/css/App.css'; 
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './components/css/Responsive.css';


import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // เมนูในแถบข้างและฉากหลังใช้ปิดอย่างเดียว (บนเดสก์ท็อปจะได้ไม่สลับสถานะค้าง)
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={closeSidebar} />

      
      {isSidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}

      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      
      <main id="main">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;