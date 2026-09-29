import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutNevio.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/pexels-rajitha-fernando-525223-1259789.webp';
import img2 from '../../assets/pexels-charithk-6337422.webp';
import img3 from '../../assets/pexels-gihans-11309702.webp';
import img4 from '../../assets/pexels-andromeda99-17801597.webp';
import img5 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873202.webp';
import img6 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873300.webp';
import img7 from '../../assets/pexels-samiulhaquebhuyan-30563640.webp';
import img8 from '../../assets/coast.webp';
import img9 from '../../assets/mountain.webp';
import img10 from '../../assets/safari_savanna.webp';
import img11 from '../../assets/maldives_beach.webp';


const AboutNevio = () => {
  const containerRef = useRef(null);



  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
  ];

  return (
    <section className="about-nevio-section" ref={containerRef}>
      {/* SVG Filter for torn paper edge effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="torn-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="about-nevio-container">
        
        {/* Top Text Content */}
        <div className="about-nevio-text">
          <span className="nevio-tag">[ABOUT PIRL]</span>
          <h2 className="nevio-title">Crafting Meaningful<br/>Journeys Worldwide</h2>
          <p className="nevio-desc">
            We specialize in crafting unforgettable tours and travel experiences that bring<br/>
            people closer to the world's most inspiring destinations.
          </p>
        </div>

      </div>

      {/* Gallery Slideshow */}
      <div className="nevio-gallery-wrapper">
        <div className="nevio-marquee">
          <div className="nevio-marquee-content">
            {galleryImages.map((imgUrl, index) => (
              <div 
                key={`m1-${index}`} 
                className="nevio-img-wrapper"
              >
                <img src={imgUrl} alt={`Sri Lanka ${index}`} className="torn-image" />
              </div>
            ))}
          </div>
          <div className="nevio-marquee-content">
            {galleryImages.map((imgUrl, index) => (
              <div 
                key={`m2-${index}`} 
                className="nevio-img-wrapper"
              >
                <img src={imgUrl} alt={`Sri Lanka ${index}`} className="torn-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNevio;
