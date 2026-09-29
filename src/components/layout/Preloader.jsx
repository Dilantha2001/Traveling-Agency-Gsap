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

    // Plane flies across straight above the text (slower, shorter distance)
    tl.fromTo('.preloader-plane-icon', 
      { x: -40, opacity: 0, rotation: 0 },
      { x: 40, opacity: 1, rotation: 0, duration: 5.5, ease: 'power1.inOut' }
    )
    .to('.preloader-content', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.in'
    }, '+=0.2')
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.5,
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
