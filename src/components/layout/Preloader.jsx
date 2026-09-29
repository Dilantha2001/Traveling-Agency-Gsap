import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaPlane } from 'react-icons/fa';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Plane flies across straight under the text
    tl.fromTo('.preloader-plane-icon', 
      { x: -150, opacity: 0, rotation: 0 },
      { x: 150, opacity: 1, rotation: 0, duration: 3.5, ease: 'power1.inOut' }
    )
    .to('.preloader-content', {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in'
    }, '+=0.2')
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'expo.inOut'
    });

  }, { scope: containerRef });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    if (window.lenis) window.lenis.stop();
    
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, []);

  return (
    <div className="preloader-container" ref={containerRef}>
      <div className="preloader-content">
        <h1 className="preloader-title">Pirl</h1>
        <FaPlane className="preloader-plane-icon" />
      </div>
    </div>
  );
};

export default Preloader;
