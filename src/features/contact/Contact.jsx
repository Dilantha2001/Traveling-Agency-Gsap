import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/pexels-dulshan-33080670.webp';
import img2 from '../../assets/ayubowan.webp';

const Contact = () => {
  const containerRef = useRef(null);



  return (
    <section className="contact-section" ref={containerRef}>
      {/* Background Image - Removed as requested */}
      {/* 
      <div className="contact-bg">
        <img 
          src={img1} 
          alt="Office Background" 
          className="contact-bg-img"
        />
        <div className="contact-bg-overlay"></div>
      </div>
      */}

      <div className="contact-container">
        <div className="contact-wrapper reveal-scale-up">
          
          {/* Left Side: Image */}
          <div className="contact-image-side">
            <img 
              src={img2} 
              alt="Customer Support" 
              className="contact-person-img"
            />
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side">
            <h2 className="contact-title">Get in Touch</h2>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-group">
                <label>NAME</label>
                <input type="text" placeholder="ENTER YOUR NAME" />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>MOBILE NUMBER</label>
                  <input type="tel" placeholder="ENTER YOUR MOBILE NUMBER" />
                </div>
                <div className="form-group half">
                  <label>DESTINATION</label>
                  <select defaultValue="">
                    <option value="" disabled>SELECT DESTINATION</option>
                    <option value="srilanka">Sri Lanka</option>
                    <option value="australia">Australia</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="italy">Italy</option>
                    <option value="japan">Japan</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>NOTE</label>
                <textarea placeholder="WRITE HERE..." rows="4"></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Drop Enquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
