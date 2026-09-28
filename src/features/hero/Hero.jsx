import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Hero.css';
import heroVideo from '../../assets/srilanka_nature.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%', // Pin for 1 screen height
        scrub: true,
        pin: true, // Pin the section
        pinSpacing: false, // Allows the next section to slide over it like a mask
      }
    });

    tl.fromTo('.hero-video-bg', 
      { scale: 1 },
      { scale: 1.5, ease: 'none' }
    );
  }, { scope: containerRef });

  return (
    <section className="hero-section" ref={containerRef}>
      <video 
        className="hero-video-bg"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </section>
  );
};

export default Hero;
