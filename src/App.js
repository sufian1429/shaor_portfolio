import React from 'react';
import './components/css/App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
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