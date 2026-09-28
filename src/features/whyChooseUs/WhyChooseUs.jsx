import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

import bgImg from '../../assets/sigiiriya.webp';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {

    
    // Parallax background
    gsap.to(".why-bg-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section className="why-choose-us-section" ref={containerRef}>
      {/* Background Image Wrapper for Parallax */}
      <div className="why-bg-wrapper">
        <img 
          src={bgImg} 
          alt="Mountain Landscape" 
          className="why-bg-image"
        />
        <div className="why-overlay"></div>
      </div>

      <div className="why-container">
        <div className="why-header reveal-scale-up">
          <span className="why-tag">[WHY CHOOSE US]</span>
          <h2 className="why-title">Why Travelers Choose Pirl</h2>
        </div>

        <div className="why-cards-layout">
          {/* Top Row - Aligned Left */}
          <div className="why-cards-row row-top">
            <div className="glass-card reveal-scale-up">
              <h3>Thoughtfully Curated</h3>
              <p>Personalized itineraries crafted for<br/>unforgettable Sri Lankan experiences.</p>
            </div>
            <div className="glass-card reveal-scale-up">
              <h3>Local Expertise</h3>
              <p>Discover the island through authentic local<br/>knowledge and expertise.</p>
            </div>
          </div>

          {/* Bottom Row - Aligned Right */}
          <div className="why-cards-row row-bottom">
            <div className="glass-card reveal-scale-up">
              <h3>Seamless Planning</h3>
              <p>Enjoy stress-free travel with every detail<br/>thoughtfully planned from start to finish.</p>
            </div>
            <div className="glass-card reveal-scale-up">
              <h3>Trusted Worldwide</h3>
              <p>Thousands of travelers rely on Pirl for<br/>seamless and inspiring journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
