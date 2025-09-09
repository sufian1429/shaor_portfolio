import React, { useState } from 'react'; // 1. Import useState
import './components/css/App.css'; // ตรวจสอบว่าไฟล์ CSS สำหรับ responsive อยู่ที่นี่
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// 2. แนะนำให้ import ไอคอนสำหรับปุ่ม
import { FaBars } from 'react-icons/fa';

function App() {
  // 3. สร้าง State เพื่อควบคุมการเปิด-ปิด Sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // 4. สร้างฟังก์ชันสำหรับสลับสถานะ (เปิด/ปิด)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* 5. ส่ง State และฟังก์ชัน toggle ไปให้ Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* 6. เพิ่มปุ่มแฮมเบอร์เกอร์สำหรับ Mobile */}
      {/* ปุ่มนี้จะถูกแสดง/ซ่อนด้วย CSS ที่เราทำไว้ก่อนหน้า */}
      <button type="button" className="mobile-nav-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* 7. เปลี่ยน className เป็น id เพื่อให้ CSS ทำงานถูกต้อง */}
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