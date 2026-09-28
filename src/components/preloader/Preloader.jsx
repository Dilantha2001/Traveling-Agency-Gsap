import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = () => {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    // Temporarily hide scrollbar while preloader is active
    document.body.style.overflow = 'hidden';

    // The SVG path coordinates
    const startPath = "M 0 100 V 0 Q 50 0 100 0 V 100 z"; // Full screen covered
    const midPath = "M 0 100 V 60 Q 50 100 100 60 V 100 z"; // Curved, pulling down
    const endPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z"; // Completely hidden at bottom

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''; // Re-enable scroll
        gsap.set(wrapperRef.current, { display: 'none' }); // Remove from view
      }
    });

    // Auto-play the timeline
    tl.to(pathRef.current, {
      attr: { d: midPath },
      duration: 0.7,
      ease: "power3.in",
      delay: 0.5 // Brief pause on load before revealing
    })
    .to(pathRef.current, {
      attr: { d: endPath },
      duration: 0.6,
      ease: "power3.out"
    });

  }, []);

  return (
    <div className="preloader-wrapper" ref={wrapperRef}>
      <svg className="preloader-transition" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path 
          ref={pathRef}
          className="preloader-path" 
          fill="#0055ff"
          d="M 0 100 V 0 Q 50 0 100 0 V 100 z" 
        />
      </svg>
    </div>
  );
};

export default Preloader;
