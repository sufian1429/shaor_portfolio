// src/components/Resume.js
import React from 'react';
import './css/About.css'; // Import ไฟล์ CSS สำหรับ Resume

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-title">
        <h2>Resume</h2>
        <p>I tried my best for the organization.</p>
      </div>

      <div className="resume-container">
        <div className="resume-column">
          <h3 className="resume-title">Currently</h3>
          <div className="resume-item">
            <h4>Southern Information Technology Co., Ltd.</h4>
            <p><em>CCTV Control Center Office</em></p>
            <ul>
              <li>15/25 Wichitsongkhram Road, Kathu Subdistrict, Kathu District, Phuket 83120</li>
              <li>+66 76 202 229</li>
              <li>Phuket.southerninformation@gmail.com</li>
            </ul>
          </div>
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
            <h5>2015 - 2016</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
          </div>
        </div>
        <div className="resume-column">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
            <h5>2019 - Present</h5>
            <p><em>Experion, New York, NY</em></p>
            <ul>
              <li>Lead in the design, development...</li>
              <li>Delegate tasks to the 7 members...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;