import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // Fade in Header
    tl.from(".why-header > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Stagger cards
    tl.from(".glass-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");
    
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
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
          alt="Mountain Landscape" 
          className="why-bg-image"
        />
        <div className="why-overlay"></div>
      </div>

      <div className="why-container">
        <div className="why-header">
          <span className="why-tag">[WHY CHOOSE US]</span>
          <h2 className="why-title">Why Travelers Choose Nevio</h2>
        </div>

        <div className="why-cards-layout">
          {/* Top Row - Aligned Left */}
          <div className="why-cards-row row-top">
            <div className="glass-card">
              <h3>Thoughtfully Curated</h3>
              <p>Personalized itineraries crafted for<br/>unforgettable travel experiences.</p>
            </div>
            <div className="glass-card">
              <h3>Local Expertise</h3>
              <p>Discover destinations through authentic local<br/>knowledge and expertise.</p>
            </div>
          </div>

          {/* Bottom Row - Aligned Right */}
          <div className="why-cards-row row-bottom">
            <div className="glass-card">
              <h3>Seamless Planning</h3>
              <p>Enjoy stress-free travel with every detail<br/>thoughtfully planned from start to finish.</p>
            </div>
            <div className="glass-card">
              <h3>Trusted Worldwide</h3>
              <p>Thousands of travelers rely on Nevio for<br/>seamless and inspiring journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
