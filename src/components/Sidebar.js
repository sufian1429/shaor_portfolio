import React from 'react';
import './css/Sidebar.css'; // Import ไฟล์ CSS สำหรับ Sidebar
import { FaGithub, 
         FaFacebook, 
         FaInstagram, 
         FaLinkedin,
         FaHome,
         FaUser,
         FaFileAlt,
         FaBriefcase,
         FaEnvelope
       } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link จาก react-scroll
import profilePic from '../assets/profile-pic.jpg'; // Import รูปโปรไฟล์

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={profilePic} alt="Sufian Maseng" className="profile-pic" />
        <h1 className="profile-name">Sufian Maseng</h1>
        <div className="social-icons">
          <a href="https://www.facebook.com/sufian.maseng.3/"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sufian-maseng-ba2567259/"><FaLinkedin /></a>
          <a href="https://www.facebook.com/sufian.maseng.3/"><FaFacebook /></a>
          <a href="https://www.instagram.com/shxorsm?igsh=cHdhYjFnMXU1aG1u"><FaInstagram /></a>          
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link activeClass="active" to="hero" spy={true} smooth={true} duration={500}><FaHome />Home</Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><FaUser />About</Link></li>
          <li><Link activeClass="active" to="resume" spy={true} smooth={true} duration={500}><FaFileAlt />Resume</Link></li>
          <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}><FaBriefcase />Portfolio</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}><FaEnvelope />Contact</Link></li>
          
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;