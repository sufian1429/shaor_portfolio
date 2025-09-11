import React, { useState, useEffect } from 'react';
import './css/Portfolio.css';


import portfolio1 from '../assets/portfolio/portfolio-1.jpg';

import portfolio3 from '../assets/portfolio/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio/portfolio-4.jpg';
import portfolio5 from '../assets/portfolio/portfolio-5.jpg';


const allProjects = [
  { id: 1, image: portfolio1, category: 'app', title: 'App Happy Save' },
  { id: 2, image: portfolio5, category: 'web', title: 'Web Internship' },
  
  { id: 4, image: portfolio4, category: 'certificate', title: 'Certificate Developer' },
  { id: 5, image: portfolio3, category: 'certificate', title: 'Certificate Big Data' },
  

 
];


const filters = [
  { key: '*', label: 'All' },
  { key: 'app', label: 'App' },
  { key: 'web', label: 'Web' },
  
  { key: 'certificate', label: 'Certificate' },
];


function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    
    if (activeFilter === '*') {
      setFilteredProjects(allProjects);
    } else {
      const newFilteredProjects = allProjects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Bismillah Sufian Portfolio</p>
        </div>

       
        <ul className="portfolio-filters">
          {filters.map(filter => (
            <li
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={activeFilter === filter.key ? 'active' : ''}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;