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

  const getTapeStyle = (idx) => {
    const corner = idx % 4; // 0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right
    const isLeft = corner === 0 || corner === 2;
    const isTop = corner === 0 || corner === 1;
    
    const rotate = isLeft ? -35 + (idx % 3) * 10 : 35 - (idx % 3) * 10;
    const left = isLeft ? 15 + (idx % 4) * 3 : 85 - (idx % 4) * 3;
    const verticalPos = -10 + (idx % 5) * 2;
    
    const style = {
      transform: `translateX(-50%) rotate(${rotate}deg)`,
      left: `${left}%`,
    };
    
    if (isTop) {
      style.top = `${verticalPos}px`;
    } else {
      style.bottom = `${verticalPos}px`;
    }
    
    return style;
  };

  useGSAP(() => {
    // Set initial state
    gsap.set('.desc-word', { opacity: 0.2, color: '#1a1a1a' });
    
    // Animate through keyframes
    gsap.to('.desc-word', {
      keyframes: [
        { opacity: 1, color: '#007bff', duration: 1 }, // Highlight blue
        { color: '#1a1a1a', duration: 1 }              // Settle black
      ],
      stagger: 0.1, // Reduced stagger so it doesn't take too long
      scrollTrigger: {
        trigger: '.nevio-desc',
        start: 'top 85%',
        end: 'bottom 40%',
        scrub: 1
      }
    });
  }, { scope: containerRef });

  return (
    <section className="about-nevio-section" ref={containerRef}>

      <div className="about-nevio-container">
        
        {/* Top Text Content */}
        <div className="about-nevio-text">
          <span className="nevio-tag">[ABOUT PIRL]</span>
          <h2 className="nevio-title">Crafting Meaningful<br/>Journeys Worldwide</h2>
          <p className="nevio-desc">
            {"Pirl was founded on a passion for exploration, creating meaningful travel experiences through carefully curated journeys and authentic local connections.".split(' ').map((word, index) => (
              <span key={index} className="desc-word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
                {word}
              </span>
            ))}
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
                <div 
                  className="nevio-tape"
                  style={getTapeStyle(index)}
                />
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
                <div 
                  className="nevio-tape"
                  style={getTapeStyle(index + 5)}
                />
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
