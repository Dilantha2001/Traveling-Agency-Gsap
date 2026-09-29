import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlane, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial fade in
    gsap.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    // Scroll behavior: hide on scroll down, show on scroll up
    const showAnim = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else if (self.direction === 1 && self.scroll() > 50) {
          showAnim.reverse();
        }
      }
    });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <FaPlane className="logo-icon" style={{ fontSize: '8px' }} />
          <span>Pirl</span>
        </div>
        
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#" className="active" onClick={toggleMobileMenu}><span className="dot"></span>Home</a></li>
          <li><a href="#" onClick={toggleMobileMenu}>About Us</a></li>
          <li><a href="#" onClick={toggleMobileMenu}>Packages</a></li>
          <li><a href="#" onClick={toggleMobileMenu}>Destinations</a></li>
          <li><a href="#" onClick={toggleMobileMenu}>Blog</a></li>
          <li><a href="#" onClick={toggleMobileMenu}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
