import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutNevio.css';

gsap.registerPlugin(ScrollTrigger);

const AboutNevio = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade in text
    gsap.from(".about-nevio-text > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Stagger in images
    gsap.from(".nevio-img-wrapper", {
      scrollTrigger: {
        trigger: ".nevio-gallery-wrapper",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: containerRef });

  const galleryImages = [
    "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=400&q=80", // Ella
    "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", // Sigiriya
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80", // Elephants
    "https://images.unsplash.com/photo-1536697246787-1f27c65664cb?auto=format&fit=crop&w=400&q=80", // Beach
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80", // Tea
    "https://images.unsplash.com/photo-1550616124-b5f7e6e5a6fc?auto=format&fit=crop&w=400&q=80", // Nine Arch
    "https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&w=400&q=80", // Kandy/Galle
    "https://images.unsplash.com/photo-1620608734992-564560ea515d?auto=format&fit=crop&w=400&q=80", // Sri Lanka temple
    "https://images.unsplash.com/photo-1625736302482-16629dc887da?auto=format&fit=crop&w=400&q=80", // Lotus Tower
    "https://images.unsplash.com/photo-1601004838382-774fbe666ee3?auto=format&fit=crop&w=400&q=80", // Nature
    "https://images.unsplash.com/photo-1596700818227-a6bdcb2d5bfb?auto=format&fit=crop&w=400&q=80", // Train
    "https://images.unsplash.com/photo-1586520792376-74fc21fc2a5d?auto=format&fit=crop&w=400&q=80", // Stilt fishermen
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
          <span className="nevio-tag">[ABOUT NEVIO]</span>
          <h2 className="nevio-title">Crafting Meaningful<br/>Journeys Worldwide</h2>
          <p className="nevio-desc">
            We specialize in crafting unforgettable tours and travel experiences that bring<br/>
            people closer to the world's most inspiring destinations.
          </p>
          
          <button className="nevio-explore-btn-group">
            <span className="btn-text">Explore Packages</span>
            <span className="btn-icon">❯</span>
          </button>
        </div>

        {/* Gallery Slideshow */}
        <div className="nevio-gallery-wrapper">
          <div className="nevio-marquee">
            <div className="nevio-marquee-content">
              {galleryImages.map((imgUrl, index) => (
                <div 
                  key={`m1-${index}`} 
                  className={`nevio-img-wrapper ${index % 2 === 0 ? 'stagger-up' : 'stagger-down'}`}
                >
                  <img src={imgUrl} alt={`Sri Lanka ${index}`} className="torn-image" />
                </div>
              ))}
            </div>
            <div className="nevio-marquee-content">
              {galleryImages.map((imgUrl, index) => (
                <div 
                  key={`m2-${index}`} 
                  className={`nevio-img-wrapper ${index % 2 === 0 ? 'stagger-up' : 'stagger-down'}`}
                >
                  <img src={imgUrl} alt={`Sri Lanka ${index}`} className="torn-image" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutNevio;
