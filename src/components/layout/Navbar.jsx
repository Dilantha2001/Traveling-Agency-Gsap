import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMountain } from 'react-icons/fa';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

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

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <FaMountain className="logo-icon" />
          <span>Pirl</span>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#" className="active"><span className="dot"></span>Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        
      </div>
    </nav>
  );
};

export default Navbar;
