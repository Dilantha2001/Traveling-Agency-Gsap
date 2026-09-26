import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    // Reveal animation for huge text
    gsap.from(".footer-huge-text", {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1
      },
      y: 100,
      opacity: 0,
      ease: "power2.out"
    });
  }, { scope: footerRef });

  return (
    <footer className="footer-section" ref={footerRef}>
      {/* Wavy SVG divider at the top */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="#1591DC" d="M0,80 Q72,160 144,80 T288,80 T432,80 T576,80 T720,80 T864,80 T1008,80 T1152,80 T1296,80 T1440,80 L1440,160 L0,160 Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">✈</span> Nevio
            </div>
            <h3 className="footer-slogan">Journeys for Every Explorer</h3>
            <p className="footer-desc">
              Explore remarkable places with personalized adventures created for every travel style.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links-container">
            <div className="footer-col">
              <h4>PAGES</h4>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">OUR PACKAGES</a></li>
                <li><a href="#">OUR DESTINATIONS</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>UTILITY</h4>
              <ul>
                <li><a href="#">STYLE GUIDE</a></li>
                <li><a href="#">CHANGELOG</a></li>
                <li><a href="#">LICENSES</a></li>
                <li><a href="#">404</a></li>
              </ul>
            </div>

            <div className="footer-col address-col">
              <h4>OFFICE ADDRESS</h4>
              <p>128 Horizon Avenue,<br/>Suite 502, San<br/>Francisco, CA 94105,<br/>United States</p>
              <p className="footer-phone">+1 (415) 555-018</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Middle Footer: Socials & Badges */}
        <div className="footer-middle">
          <div className="footer-socials">
            <a href="#" className="social-box"><FaLinkedinIn /></a>
            <a href="#" className="social-box"><span style={{fontWeight: 'bold', fontFamily: 'sans-serif'}}>X</span></a>
            <a href="#" className="social-box"><FaInstagram /></a>
            <a href="#" className="social-box"><FaYoutube /></a>
            <a href="#" className="social-box"><FaFacebookF /></a>
          </div>
        </div>

        {/* Bottom Footer: Huge Text & Copyright */}
        <div className="footer-bottom">
          <h1 className="footer-huge-text">Nevio</h1>
          <p className="footer-copyright">© 2026 Nevio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
