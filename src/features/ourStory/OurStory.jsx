import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in top text
    gsap.from(".story-header-content > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Reveal cards
    gsap.from(".story-card", {
      scrollTrigger: {
        trigger: ".story-cards-container",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
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
              Nevio was founded on a passion for exploration, creating meaningful travel experiences through carefully curated journeys and authentic local connections.
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
          <div className="story-card video-story-card">
            <img 
              src="https://images.unsplash.com/photo-1506905925232-4684a9bc060f?auto=format&fit=crop&w=800&q=80" 
              alt="Mountain View" 
              className="story-video-bg"
            />
            <button className="story-pause-btn">❚❚</button>
            <div className="story-marquee-container">
              <div className="story-marquee">
                <span>Japan ✦ Costa Rica ✦ Santorini ✦ Dolomites ✦ Dolomites, Italy ✦ Bali, Indonesia ✦ Kyoto, Japan ✦</span>
                <span>Japan ✦ Costa Rica ✦ Santorini ✦ Dolomites ✦ Dolomites, Italy ✦ Bali, Indonesia ✦ Kyoto, Japan ✦</span>
              </div>
            </div>
          </div>

          {/* Right Card: Image & Yellow Box */}
          <div className="story-card image-story-card">
            <img 
              src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80" 
              alt="Mountain Biking" 
              className="story-biking-bg"
            />
            <div className="story-floating-box">
              <div className="story-floating-header">
                <div className="story-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&h=50&q=80" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=50&h=50&q=80" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=50&h=50&q=80" alt="Avatar" />
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
