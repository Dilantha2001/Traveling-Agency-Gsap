import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/lotous.mp4';
import img2 from '../../assets/pexels-samiulhaquebhuyan-30563640.webp';
import img3 from '../../assets/pexels-harsha-bokalawala-706195915-36002646.webp';
import img4 from '../../assets/pexels-ruwan-lakmal-326724272-33404365.webp';
import img5 from '../../assets/pexels-gihans-11309702.webp';

const OurStory = () => {
  const containerRef = useRef(null);



  useGSAP(() => {
    // Set initial state
    gsap.set('.story-word', { opacity: 0.2, color: '#1a1a1a' });
    
    // Animate through keyframes
    gsap.to('.story-word', {
      keyframes: [
        { opacity: 1, color: '#007bff', duration: 1 }, // Highlight blue
        { color: '#1a1a1a', duration: 1 }              // Settle black
      ],
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.story-title',
        start: 'top 85%',
        end: 'bottom 40%',
        scrub: 1
      }
    });
  }, { scope: containerRef });

  return (
    <section className="our-story-section" ref={containerRef}>
      <div className="our-story-container">
        
        {/* Header Section */}
        <div className="story-header">
          <div className="story-header-content">
            <span className="story-tag">[OUR STORY]</span>
            <h2 className="story-title">
              {"Pirl was founded on a passion for exploration, creating meaningful travel experiences through carefully curated journeys and authentic local connections.".split(' ').map((word, index) => (
                <span key={index} className="story-word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {word}
                </span>
              ))}
            </h2>
          </div>
          <div className="story-header-btn">
            <button className="nevio-explore-btn-group">
              <span className="btn-text">Explore Destinations</span>
              <span className="btn-icon">❯</span>
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="story-cards-container">
          
          {/* Left Card: Video & Marquee */}
          <div className="story-card video-story-card reveal-scale-up">
            <video 
              src={img1} 
              className="story-video-bg"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="story-marquee-container">
              <div className="story-marquee">
                <span>Sigiriya ✦ Ella ✦ Mirissa ✦ Galle Fort ✦ Yala National Park ✦ Kandy ✦ Nuwara Eliya ✦ </span>
                <span>Sigiriya ✦ Ella ✦ Mirissa ✦ Galle Fort ✦ Yala National Park ✦ Kandy ✦ Nuwara Eliya ✦ </span>
              </div>
            </div>
          </div>

          {/* Right Card: Image & Yellow Box */}
          <div className="story-card image-story-card reveal-scale-up">
            <img 
              src={img2} 
              alt="Mountain Biking" 
              className="story-biking-bg"
            />
            <div className="story-floating-box">
              <div className="story-floating-header">
                <div className="story-avatars">
                  <img src={img3} alt="Avatar" />
                  <img src={img4} alt="Avatar" />
                  <img src={img5} alt="Avatar" />
                </div>
                <span className="story-dest-count">150+ DESTINATIONS</span>
              </div>
              <p className="story-floating-text">
                Creating journeys that<br/>inspire every traveler.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
