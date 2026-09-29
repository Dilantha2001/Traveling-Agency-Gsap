import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlane, FaMapMarkedAlt, FaCompass, FaSuitcaseRolling, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

import bgImg from '../../assets/sigiiriya.webp';

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

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

    // The blue curve transition reveal
    const fullPath = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
    const midPath = "M 0 100 V 60 Q 50 100 100 60 V 100 z";
    const endPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";

    gsap.set(pathRef.current, { attr: { d: fullPath } });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Pins the section when it hits the top
        end: "+=250%", // Increased pinning distance so there is time to read and then animate out
        pin: true,
        scrub: 1, // Smoothly ties the transition animation to the user's scroll progress!
        pinSpacing: true
      }
    });

    // Step 0: Pause on the blue screen so the user sees it pinned
    tl.to({}, {duration: 1});

    // Step 1: Fade and hide the initial "Pirl" text
    tl.to(textRef.current, {
      autoAlpha: 0,
      y: -150,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut"
    }, 1)
    // Step 2: Animate the blue SVG layer away
    .to(pathRef.current, {
      attr: { d: midPath },
      duration: 0.8,
      ease: "power2.in"
    }, 1)
    .to(pathRef.current, {
      attr: { d: endPath },
      duration: 0.8,
      ease: "power2.out"
    })
    .set(overlayRef.current, { pointerEvents: "none" })
    
    // Step 3: Pause for reading, then scatter everything!
    // The header flies up
    tl.to(".why-header", {
      y: -150,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    }, "+=0.8")
    
    // Cards elegantly glide up and fade out sequentially
    .to(".glass-card", {
      y: -150,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.15,
      ease: "power3.inOut"
    }, "<0.2")
    
    // Step 4: Zoom into the background image
    .to(".why-bg-image", {
      scale: 1.3,
      duration: 1.5,
      ease: "power1.inOut"
    }, "<0.2"); // Starts zooming just as the cards scatter

  }, { scope: containerRef });

  return (
    <section id="packages" className="why-choose-us-section" ref={containerRef}>
      {/* SVG Blue Transition Overlay */}
      <div className="why-svg-overlay" ref={overlayRef}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <path ref={pathRef} fill="#1591DC" d="M 0 100 V 0 Q 50 0 100 0 V 100 z" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="overlay-center-text" ref={textRef}>
          <FaPlane className="overlay-plane-icon" />
          <h1>Pirl</h1>
        </div>
      </div>

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
          <div className="glass-card card-1 reveal-scale-up">
            <div className="card-icon-wrapper">
              <FaMapMarkedAlt className="card-icon" />
            </div>
            <h3>Thoughtfully Curated</h3>
            <p>Hand-picked, personalized itineraries crafted exclusively for your unforgettable Sri Lankan experience.</p>
          </div>
          <div className="glass-card card-2 reveal-scale-up">
            <div className="card-icon-wrapper">
              <FaCompass className="card-icon" />
            </div>
            <h3>Local Expertise</h3>
            <p>Discover the hidden gems of the island through authentic, on-the-ground local knowledge.</p>
          </div>
          <div className="glass-card card-3 reveal-scale-up">
            <div className="card-icon-wrapper">
              <FaSuitcaseRolling className="card-icon" />
            </div>
            <h3>Seamless Planning</h3>
            <p>Enjoy a perfectly stress-free journey with every single detail thoughtfully planned from start to finish.</p>
          </div>
          <div className="glass-card card-4 reveal-scale-up">
            <div className="card-icon-wrapper">
              <FaShieldAlt className="card-icon" />
            </div>
            <h3>Trusted Worldwide</h3>
            <p>Thousands of global travelers rely on Pirl for completely seamless and deeply inspiring journeys.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
