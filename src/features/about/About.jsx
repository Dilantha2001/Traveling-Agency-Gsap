import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';
import mountainImage from '../../assets/2nd.webp';
import coastImage from '../../assets/2nd2.webp';
import destinationImage from '../../assets/2nd3.webp';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Text color scrub
    gsap.fromTo(".anim-word", 
      { color: "#d1d5db" }, // light gray
      {
        color: "#333333", // dark gray theme color
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1
        }
      }
    );

    // Inline Image Reveal
    const imageWrappers = gsap.utils.toArray('.anim-img-wrapper');
    
    imageWrappers.forEach((wrapper) => {
      const img = wrapper.querySelector('.anim-img');
      
      gsap.set(wrapper, { width: 0 });

      ScrollTrigger.create({
        trigger: wrapper.parentElement,
        start: "top 85%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(wrapper, {
            width: "140px",
            duration: 0.5,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(wrapper, {
            width: 0,
            duration: 0.5,
            ease: "power2.inOut"
          });
        }
      });
    });

    // Stats Counter Animation
    const stats = gsap.utils.toArray('.stat-number');
    stats.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const isFloat = target % 1 !== 0;
      const zero = { val: 0 };
      
      gsap.to(zero, {
        val: target,
        duration: 1, // Sped up the animation
        ease: "power3.out", // Smoother easing
        scrollTrigger: {
          trigger: ".about-stats-container",
          start: "top 90%", // Trigger when the stats container is 90% in view
        },
        onUpdate: function() {
          stat.innerHTML = isFloat ? zero.val.toFixed(1) : Math.round(zero.val);
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section className="about-section" ref={containerRef}>
      <div className="about-header">
        <span className="about-subtitle">(ABOUT US)</span>
        <h2 className="about-title">
          <div className="anim-line">
            {["We", "specialize", "in"].map((w, i) => <span key={`w1-${i}`} className="anim-word">{w}</span>)}
            <span className="anim-img-wrapper">
              <img src={mountainImage} alt="tours" className="anim-img" />
            </span>
            <span className="anim-word">crafting</span>
          </div>
          <div className="anim-line">
            {["unforgettable", "tours", "and"].map((w, i) => <span key={`w2-${i}`} className="anim-word">{w}</span>)}
          </div>
          <div className="anim-line">
            <span className="anim-word">travel</span>
            <span className="anim-img-wrapper">
              <img src={coastImage} alt="experiences" className="anim-img" />
            </span>
            {["experiences", "that", "bring"].map((w, i) => <span key={`w3-${i}`} className="anim-word">{w}</span>)}
          </div>
          <div className="anim-line">
            {["people", "closer", "to", "the"].map((w, i) => <span key={`w4-${i}`} className="anim-word">{w}</span>)}
          </div>
          <div className="anim-line">
            {["world's", "most", "inspiring"].map((w, i) => <span key={`w5-${i}`} className="anim-word">{w}</span>)}
            <span className="anim-img-wrapper">
              <img src={destinationImage} alt="destinations" className="anim-img" />
            </span>
          </div>
          <div className="anim-line">
            <span className="anim-word">destinations.</span>
          </div>
        </h2>
      </div>

      <div className="about-cards-container">
        <div className="about-card image-card">
          <img src={mountainImage} alt="Mountain landscape" />
        </div>
        <div className="about-card image-card">
          <img src={coastImage} alt="Rocky coast" />
          <div className="save-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Save
          </div>
        </div>
        <div className="about-card text-card">
          <div className="text-card-content">
            <h3>EXPLORE.</h3>
            <h4>The world is waiting.</h4>
          </div>
          <p className="text-card-footer">
            Creating journeys that inspire every traveler to<br/>
            explore with confidence and wonder.
          </p>
        </div>
      </div>

      <div className="about-stats-container">
        <div className="stat-card">
          <h3><span className="stat-number" data-target="50">0</span>+</h3>
          <p>
            <span className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </span>
            Destinations
          </p>
        </div>
        <div className="stat-card">
          <h3><span className="stat-number" data-target="12">0</span>K+</h3>
          <p>
            <span className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm3.5-9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.5 5.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/></svg>
            </span>
            Happy Travelers
          </p>
        </div>
        <div className="stat-card">
          <h3><span className="stat-number" data-target="4.9">0.0</span></h3>
          <p>
            <span className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </span>
            Traveler Rating
          </p>
        </div>
        <div className="stat-card">
          <h3><span className="stat-number" data-target="10">0</span>+</h3>
          <p>
            <span className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            </span>
            Years Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
