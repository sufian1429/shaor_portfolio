import React, { useState, useEffect } from 'react';
import './css/Portfolio.css'; // ไฟล์ CSS ที่จะสร้างถัดไป

// --- ส่วนข้อมูลผลงาน ---
// 1. Import รูปภาพผลงานของคุณจากโฟลเดอร์ assets
import portfolio1 from '../assets/portfolio/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio/portfolio-3.jpg';


// 2. สร้าง Array เก็บข้อมูลผลงานทั้งหมด
const allProjects = [
  { id: 1, image: portfolio1, category: 'app' },
  { id: 2, image: portfolio2, category: 'product' },
  { id: 3, image: portfolio3, category: 'branding' },
];

function Portfolio() {
  // State สำหรับเก็บ filter ที่ถูกเลือก ('*' คือทั้งหมด)
  const [filter, setFilter] = useState('*');
  // State สำหรับเก็บผลงานที่จะแสดงผล
  const [projects, setProjects] = useState([]);

  // useEffect จะทำงานทุกครั้งที่ค่า filter เปลี่ยน
  useEffect(() => {
    if (filter === '*') {
      setProjects(allProjects);
    } else {
      // กรอง allProjects โดยเลือกเฉพาะ category ที่ตรงกับ filter
      const filteredProjects = allProjects.filter(
        (project) => project.category === filter
      );
      setProjects(filteredProjects);
    }
  }, [filter]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      {/* --- Filter Controls --- */}
      <ul className="portfolio-filters">
        <li onClick={() => setFilter('*')} className={filter === '*' ? 'active' : ''}>
          ALL
        </li>
        <li onClick={() => setFilter('app')} className={filter === 'app' ? 'active' : ''}>
          APP
        </li>
        <li onClick={() => setFilter('product')} className={filter === 'product' ? 'active' : ''}>
          PRODUCT
        </li>
        <li onClick={() => setFilter('branding')} className={filter === 'branding' ? 'active' : ''}>
          BRANDING
        </li>
        <li onClick={() => setFilter('books')} className={filter === 'books' ? 'active' : ''}>
          BOOKS
        </li>
      </ul>

      {/* --- Portfolio Grid --- */}
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={`Portfolio item ${project.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;