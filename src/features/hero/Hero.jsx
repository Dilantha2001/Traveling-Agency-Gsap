import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';
import heroVideo from '../../assets/srilanka_nature.mp4';

const Hero = () => {
  useEffect(() => {
    // Effects removed per user request
  }, []);

  return (
    <section className="hero-section">
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
