import React from 'react';
import './css/Hero.css'; // Import ไฟล์ CSS สำหรับ Hero
import { TypeAnimation } from 'react-type-animation';
// import { HiHome } from 'react-icons/hi';

function Hero() {
  return (
    
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Sufian Maseng</h1>
        <p>I'm a&nbsp;
          <TypeAnimation
            sequence={[
              'Photographer',
              2000,
              'Developer',
              2000,
              'Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ borderBottom: '3px solid #149ddd', color: '#fff' }}
          />
        </p>
      </div>
    </section>
  );
}

export default Hero;