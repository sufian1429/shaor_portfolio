import React from 'react';
import './css/Resume.css';


const ResumeItem = ({ title, duration, institution, details }) => (
  <div className="resume-item">
    <h4>{title}</h4>
    {duration && <h5>{duration}</h5>}
    {institution && <p><em>{institution}</em></p>}
    {details && (
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>          
        </div>
        <div className="resume-grid">
          
          <div className="resume-column">
            <h3 className="resume-title">Summary</h3>
            <ResumeItem
              title="CCTV Control Center Office"
              institution="Southern Information Technology Co., Ltd."
              details={[
                'Kathu Subdistrict, Kathu District, Phuket',
                '+66 76 202 229',
                'Phuket.southerninformation@gmail.com',
              ]}
            />

            <h3 className="resume-title">Education</h3>
            <ResumeItem
              title="Science-Math Major"
              duration="2013 - 2018"
              institution="MUSLIM PATTANASART SCHOOL, Pattani, Thailand"
            />
            <ResumeItem
              title="Faculty of Engineering, Computer Engineering"
              duration="2018 - 2024"
              institution="PRINCE OF SONGKLA UNIVERSITY, PHUKET CAMPUS"
            />

            <h3 className="resume-title">Professional Experience</h3>
            <ResumeItem
              title="CCTV Control Center Officer"
              duration="2024 - Present"
              institution="Kathu Subdistrict, Kathu District, Phuket"
              details={['Monitored and operated CCTV systems to ensure public safety.']}
            />
          </div>
        
        
          
          <div className="resume-column">
            <h3 className="resume-title">Work Experience</h3>
            <ResumeItem
              title="Internship position Front-end Developer"
              duration="2022"
              institution="Nebula Ventures Co., Ltd."
              details={['Creating a NFT website in a format that users can buy-sell the NFT card.']}
            />
          
          
            <h3 className="resume-title">Extra-curricular Activities</h3>
            <ResumeItem
              title="Training on the Big Data Experience and Skill Uplifting Project for Youth"
              duration="2022"
              institution="Software Park Thailand"
              details={['Analyzing Data and Visual Reports with Microsoft Power BI.']}
            />
            <h3 className="resume-title">Projects</h3>
            <ResumeItem
              title="Happy Save Application"
              duration="2022"
              institution="PRINCE OF SONGKLA UNIVERSITY, PHUKET CAMPUS"
              details={['Record income - expenses with pictures.']}
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

