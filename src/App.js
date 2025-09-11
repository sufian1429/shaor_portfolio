import React, { useState } from 'react'; 
import './components/css/App.css'; 
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


import { FaBars } from 'react-icons/fa';

function App() {
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      
      <button type="button" className="mobile-nav-toggle" onClick={toggleSidebar}>
        <FaBars />
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