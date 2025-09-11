import React from 'react';
import './css/About.css';
import aboutImg from '../assets/profile-pic.jpg';

// --- DATA ---
// จัดเก็บข้อมูลในรูปแบบ Object เพื่อง่ายต่อการจัดการ
const resumeData = {
  personalInfo: {
    birthday: '1999-12-12', // ใช้ Format YYYY-MM-DD เพื่อการคำนวณ
    phone: '+66 93 9371 381',
    address: 'Phuket, Thailand',
    degree: 'Junior Developer',
    email: 'sufian94150@gmail.com',
  },
  skills: {
    languages: [
      
      'HTML',
      'CSS',
      'JavaScript',
      'Dart',

    ],
    frameworksAndLibraries: [
      'React',
      'Vue.js',
      'Node.js',
      'Flutter',
      'Robot Framework',
    ],
    toolsAndDatabases: [
      'Git',
      'GitHub',
      'Postman',
      'MySQL',
      'Firebase',
      'MongoDB',
    ],
  },
  interests: [
    'QA & Software Tester',
    'Front-end Developer',
    'Mobile & Web Developer',
    'Data Engineer',
  ],
};

// --- HELPER FUNCTION ---
// ฟังก์ชันสำหรับคำนวณอายุจากวันเกิด
const calculateAge = (birthDateString) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

// --- REUSABLE COMPONENTS ---
const InfoItem = ({ label, value }) => (
  <li>
    <strong>{label}:</strong> {value}
  </li>
);

// Component ใหม่สำหรับแสดง Skills ในแต่ละหมวดหมู่
const SkillCategory = ({ title, items }) => (
  <div className="skill-category">
    <h4>{title}</h4>
    <ul className="skills-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

// --- MAIN COMPONENT ---
function About() {
  const age = calculateAge(resumeData.personalInfo.birthday);

  // เตรียมข้อมูลส่วนตัวสำหรับแสดงผล
  const personalInfo = {
    leftColumn: [
      { label: 'Birthday', value: '12 December 1999' },
      { label: 'Phone', value: resumeData.personalInfo.phone },
      { label: 'Address', value: resumeData.personalInfo.address },
    ],
    rightColumn: [
      { label: 'Age', value: age }, // ใช้อายุที่คำนวณได้
      { label: 'Degree', value: resumeData.personalInfo.degree },
      { label: 'Email', value: resumeData.personalInfo.email },
    ],
  };

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
                {personalInfo.leftColumn.map((item) => (
                  <InfoItem key={item.label} {...item} />
                ))}
              </ul>
              <ul>
                {personalInfo.rightColumn.map((item) => (
                  <InfoItem key={item.label} {...item} />
                ))}
              </ul>
            </div>

            <div className="skills-section">
              <h3>Skills</h3>
              <SkillCategory
                title="Languages"
                items={resumeData.skills.languages}
              />
              <SkillCategory
                title="Frameworks & Libraries"
                items={resumeData.skills.frameworksAndLibraries}
              />
              <SkillCategory
                title="Tools & Databases"
                items={resumeData.skills.toolsAndDatabases}
              />
            </div>

            <div className="interests-section">
              <h3>Interests</h3>
              <ul className="interests-list">
                {resumeData.interests.map((interest) => (
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

