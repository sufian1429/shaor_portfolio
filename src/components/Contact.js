import React from 'react';
import './css/Contact.css'; 
import { IoLocationOutline } from 'react-icons/io5'; 
import { RiPhoneLine } from 'react-icons/ri';      
import { HiOutlineMail } from 'react-icons/hi';       

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="contact-container">
        {/* ----- Left Column ----- */}
        <div className="contact-info">
          <div className="info-item">
            <div className="icon-box"><IoLocationOutline /></div>
            <h4>Address</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>

          <div className="info-item">
            <div className="icon-box"><RiPhoneLine /></div>
            <h4>Call Us</h4>
            <p>+1 5589 55488 55</p>
          </div>

          <div className="info-item">
            <div className="icon-box"><HiOutlineMail /></div>
            <h4>Email Us</h4>
            <p>info@example.com</p>
          </div>

          <div className="info-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.361281139571!2d-74.00843238459521!3d40.7100592793321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda22d%3A0x17127725e59b2071!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1622012015502!5m2!1sen!2sus"
              width="100%"
              height="290"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* ----- Right Column ----- */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" required></textarea>
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