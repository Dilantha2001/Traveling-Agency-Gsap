import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaMountain } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <FaMountain className="logo-icon" />
          <span>Nevio</span>
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
