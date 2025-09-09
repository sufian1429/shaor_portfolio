import React, { useState, useEffect } from 'react';
import './css/Portfolio.css';

// Import รูปภาพทั้งหมดของคุณที่นี่
import portfolio1 from '../assets/portfolio/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio/portfolio-4.jpg';
import portfolio5 from '../assets/portfolio/portfolio-5.jpg';
// เพิ่มการนำเข้ารูปภาพอื่นๆ ของคุณที่นี่...

// --- Data Configuration ---
// ข้อมูลโปรเจกต์ทั้งหมด: เพิ่ม, ลบ, แก้ไขโปรเจกต์ของคุณได้ง่ายๆ ที่นี่
const allProjects = [
  { id: 1, image: portfolio1, category: 'app', title: 'App Happy Save' },
  { id: 2, image: portfolio5, category: 'web', title: 'Web Internship' },
  { id: 3, image: portfolio2, category: 'branding', title: 'Youtube Channel Shaor' },
  { id: 4, image: portfolio4, category: 'certificate', title: 'Certificate Big Data' },
  { id: 5, image: portfolio3, category: 'certificate', title: 'Certificate Developer' },
  

  // เพิ่มโปรเจกต์อื่นๆ ของคุณต่อที่นี่...
];

// ข้อมูลสำหรับสร้างปุ่มฟิลเตอร์
const filters = [
  { key: '*', label: 'All' },
  { key: 'app', label: 'App' },
  { key: 'web', label: 'Web' },
  { key: 'branding', label: 'Branding' },
  { key: 'certificate', label: 'Certificate' },
];

// --- Main Portfolio Component ---
function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Logic การฟิลเตอร์ที่กระชับขึ้น
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
          <p>Bismillah Shaor Portfolio</p>
        </div>

        {/* สร้างปุ่มฟิลเตอร์จากข้อมูลใน Array */}
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

        {/* แสดงผลโปรเจกต์ที่ผ่านการฟิลเตอร์ */}
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