import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoSection.css';

gsap.registerPlugin(ScrollTrigger);

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

    // Fade in text
    gsap.from(".video-text-content > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className="video-section-wrapper" ref={containerRef}>
      <div className="video-container">
        
        {/* Background Video (Using image for demo purposes since we don't have video file) */}
        <div className="video-background">
          <img 
            src="https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1920&q=80" 
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
