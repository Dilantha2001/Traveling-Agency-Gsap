import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in and slide up the main contact wrapper
    gsap.from(".contact-wrapper", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className="contact-section" ref={containerRef}>
      {/* Background Image */}
      <div className="contact-bg">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Office Background" 
          className="contact-bg-img"
        />
        <div className="contact-bg-overlay"></div>
      </div>

      <div className="contact-container">
        <div className="contact-wrapper">
          
          {/* Left Side: Image */}
          <div className="contact-image-side">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
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
