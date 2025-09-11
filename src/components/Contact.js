import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import './css/Contact.css'; 
import { IoLocationOutline } from 'react-icons/io5'; 
import { RiPhoneLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault(); 

    
    emailjs.sendForm(
        'service_km0vczl',   
        'template_hx0vli5',   
        form.current,        
        'STMo1O8ZbLg00aF60'     
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว!');
          form.current.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('เกิดข้อผิดพลาด ไม่สามารถส่งข้อความได้');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact</h2>
        <p>I am always open to discussing new projects or interesting job opportunities. Should you have any questions, proposals, or ideas you'd like to share, please feel free to contact me through the channels below. I will get back to you as soon as possible.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          
          <div className="info-item">
            <div className="icon-box"><IoLocationOutline /></div>
            <div className="text-content">
              <h4>Address</h4><p>Phuket, Thailand</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box"><RiPhoneLine /></div>
            <div className="text-content">
              <h4>Call Us</h4><p>+66 93 9371 381</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box"><HiOutlineMail /></div>
            <div className="text-content">
              <h4>Email Us</h4><p>sufian94150@gmail.com</p>
            </div>
          </div>
          <div className="info-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505923.89505392034!2d98.37061765!3d7.839417449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9ca9a85063dba21!2sPhuket!5e0!3m2!1sen!2sth!4v1757325778628!5m2!1sen!2sth" width="100%" height="290" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Maps Location"></iframe>
          </div>
        </div>

        <div className="contact-form">
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;