import React from 'react';
import './css/Sidebar.css';
import {
  FaGithub, FaFacebook, FaInstagram, FaLinkedin,
  FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile-pic.jpg';

const socialLinks = [
  // ... ข้อมูล socialLinks เหมือนเดิม
  { href: 'https://github.com/sufian1429', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sufian-maseng-ba2567259/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/sufian.maseng.3/', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'https://www.instagram.com/shxorsm?igsh=cHdhYjFnMXU1aG1u', icon: <FaInstagram />, label: 'Instagram' },
];

const navLinks = [
  // ... ข้อมูล navLinks เหมือนเดิม
  { to: 'hero', icon: <FaHome />, text: 'Home' },
  { to: 'about', icon: <FaUser />, text: 'About' },
  { to: 'resume', icon: <FaFileAlt />, text: 'Resume' },
  { to: 'portfolio', icon: <FaBriefcase />, text: 'Portfolio' },
  { to: 'contact', icon: <FaEnvelope />, text: 'Contact' },
];

// 1. รับ props (isOpen และ toggleSidebar) เข้ามาใน Component
function Sidebar({ isOpen, toggleSidebar }) {
  return (
    // 2. ใช้ Template String เพื่อกำหนด className แบบมีเงื่อนไข
    // ถ้า isOpen เป็น true, จะเพิ่ม class 'sidebar-toggled' เข้าไป
    <aside className={`sidebar ${isOpen ? 'sidebar-toggled' : ''}`}>
      <div className="sidebar-header">
        <img src={profilePic} alt="Sufian Maseng" className="profile-pic" />
        <h1 className="profile-name">Sufian Maseng</h1>
        
        <div className="social-icons">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                // 3. เพิ่ม onClick เพื่อให้ Sidebar ปิดอัตโนมัติเมื่อคลิกเมนู (บนจอมือถือ)
                onClick={toggleSidebar}
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;