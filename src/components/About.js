import React from 'react';
// import CountUp from 'react-countup';
import './css/About.css';
import aboutImg from '../assets/profile-pic.jpg';
function About() {
  return (
    // ใส่ id="about"
    <section id="about" className="about">
      <div className="section-title">
        <h2>About</h2>
        <p>I tried my best for the organization.</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="about-text">
          <h3>Web Developer & Mobile Developer.</h3>
          {/* <p>Bismillah...</p> */}
          <div className="personal-info">
            <ul>
              <li><strong>Birthday:</strong> 12 December 1999</li>
              <li><strong>Website:</strong> www.shaor_portfolio.com</li>
              <li><strong>Phone:</strong> +66 93 9371 381</li>
              <li><strong>City:</strong> Phuket, Thailand</li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 26</li>
              <li><strong>Degree:</strong> Junior Web Developer</li>
              <li><strong>Email:</strong> sufian94150@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
          <h1>Skills</h1>
          <div className="personal-info">
            <ul>
              <li><strong>Birthday:</strong> 12 December 1999</li>
              <li><strong>Website:</strong> www.shaor_portfolio.com</li>
              <li><strong>Phone:</strong> +66 93 9371 381</li>
              <li><strong>City:</strong> Phuket, Thailand</li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 26</li>
              <li><strong>Degree:</strong> Junior Web Developer</li>
              <li><strong>Email:</strong> sufian94150@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        
      </div>

      {/* <div className="stats-counter">
        <div className="stat-item">
          <span className="counter"><CountUp end={232} duration={3} /></span>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <span className="counter"><CountUp end={2} duration={3} /></span>
          <p>Projects</p>
        </div>
        <div className="stat-item">
          <span className="counter"><CountUp end={1453} duration={3} /></span>
          <p>Hours Of Support</p>
        </div>
        <div className="stat-item">
          <span className="counter"><CountUp end={32} duration={3} /></span>
          <p>Hard Workers</p>
        </div>
      </div> */}
    </section>
  );
}

export default About;