import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoSection.css';

gsap.registerPlugin(ScrollTrigger);

import videoImg from '../../assets/safari_savanna.webp';

const VideoSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax effect for the video
    gsap.fromTo(".video-element", 
      { y: -50 },
      {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );


  }, { scope: containerRef });

  return (
    <section className="video-section-wrapper" ref={containerRef}>
      <div className="video-container">
        
        {/* Background Video (Using image for demo purposes since we don't have video file) */}
        <div className="video-background">
          <img 
            src={videoImg} 
            alt="Beautiful coastline" 
            className="video-element"
          />
          <div className="video-overlay"></div>
        </div>

        {/* Content */}
        <div className="video-content">
          <div className="video-text-content">
            <h2>Create <span className="highlight-yellow">Memories</span><br/>That Last a Lifetime</h2>
            
            <button className="enquiry-btn-group">
              <span className="btn-text">Enquiry Now</span>
              <span className="btn-icon">❯</span>
            </button>
          </div>
          
          <button className="pause-btn">
            ❚❚
          </button>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
