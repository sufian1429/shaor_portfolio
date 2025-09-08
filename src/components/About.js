import React from 'react';
import './css/About.css';
import aboutImg from '../assets/profile-pic.jpg';


const personalInfo = {
  leftColumn: [
    { label: 'Birthday', value: '12 December 1999' },
    
    { label: 'Phone', value: '+66 93 9371 381' },
    { label: 'City', value: 'Phuket, Thailand' },
  ],
  rightColumn: [
    { label: 'Age', value: '26' },
    { label: 'Degree', value: 'Junior Developer' },
    { label: 'Email', value: 'sufian94150@gmail.com' },
    
  ],
};

const skills = [
  'HTML / CSS / JavaScript', 'React', 'Vue.js', 'Node.js', 
  'Flutter / Dart', 'Git / GitHub', 'Postman', 
  'MySQL / Firebase / MongoDB', 'Visual Studio Code', 
  'Android Studio', 'Robot Framework'
];

const interests = [
  'QA & Software Tester', 'Front-end Developer', 
  'Mobile & Web Developer', 'Data Engineer'
];

// --- Reusable Component ---
// Component เล็กๆ สำหรับแสดงรายการข้อมูลส่วนตัว
const InfoItem = ({ label, value }) => (
  <li>
    <strong>{label}:</strong> {value}
  </li>
);

// --- Main Component ---
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            A passionate developer with experience in building web and mobile applications. 
            I enjoy solving complex problems and turning ideas into beautiful, functional products.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="Sufian" />
          </div>

          <div className="about-text">
            <h3>Web &amp; Mobile Developer</h3>
            <p className="about-intro">
              Here are a few details about me.
            </p>
            
            <div className="info-grid">
              <ul>
                {personalInfo.leftColumn.map(item => (
                  <InfoItem key={item.label} label={item.label} value={item.value} />
                ))}
              </ul>
              <ul>
                {personalInfo.rightColumn.map(item => (
                  <InfoItem key={item.label} label={item.label} value={item.value} />
                ))}
              </ul>
            </div>

            <div className="skills-section">
              <h3>Skills</h3>
              <ul className="skills-list">
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="interests-section">
              <h3>Interests</h3>
              <ul className="interests-list">
                {interests.map(interest => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;