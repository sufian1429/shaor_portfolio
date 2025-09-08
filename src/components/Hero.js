import React from 'react';
import './css/Hero.css';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Sufian Maseng</h1>
        <p>I'm a&nbsp;
          <TypeAnimation
            sequence={[              
              'Junior Developer',
              2000, 
              'Software Tester',
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