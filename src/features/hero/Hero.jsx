import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const bgRef = useRef(null);
  const hikerRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const largeTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Large background text fade in
    tl.fromTo(
      largeTextRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 0.1, scale: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Hiker fade in and slide up
    tl.fromTo(
      hikerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );

    // Title stagger
    tl.fromTo(
      titleRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=0.5'
    );

    // Subtext and buttons
    tl.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    );

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(bgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power1.out',
      });
      gsap.to(hikerRef.current, {
        x: -xPos * 1.5,
        y: -yPos * 1.5,
        duration: 1,
        ease: 'power1.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div 
        ref={bgRef} 
        className="hero-bg"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop)' }}
      ></div>
      
      <div className="hero-overlay"></div>

      <div ref={largeTextRef} className="hero-large-text">
        Discover
      </div>

      

      <div className="hero-content container">
        <div className="hero-text-block">
          <h1 ref={titleRef} className="heading-large">
            <span style={{ display: 'block' }}>Discover Your Great</span>
            <span style={{ display: 'block' }} className="text-accent">Adventure Awaits</span>
          </h1>
          
          <div ref={textRef} className="hero-subcontent">
            <p className="hero-description">
              Experience the world's most thrilling and unforgettable destinations, thoughtfully crafted to
              create ultimate journeys for every traveler around the world.
            </p>
            <div className="hero-actions">
              <button className="btn-accent">
                Explore Packages <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
