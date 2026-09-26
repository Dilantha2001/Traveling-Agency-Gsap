import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/coast.webp';
import img2 from '../../assets/maldives_beach.webp';
import img3 from '../../assets/mountain.webp';
import img4 from '../../assets/nharshanahw-elephant-3903267_1920.webp';
import img5 from '../../assets/niwantha_niluka-mountain-7897203_1920.webp';
import img6 from '../../assets/oleksandrpidvalnyi-ocean-7029117_1920.webp';
import img7 from '../../assets/peographic-temple-3649292_1920.webp';
import img8 from '../../assets/pexels-andromeda99-17801597.webp';
import img9 from '../../assets/pexels-charithk-6337422.webp';
import img10 from '../../assets/pexels-dulshan-33080670.webp';
import img11 from '../../assets/pexels-gihans-11309702.webp';
import img12 from '../../assets/pexels-harsha-bokalawala-706195915-36002646.webp';
import img13 from '../../assets/pexels-pexels-user-178764159-11166072.webp';
import img14 from '../../assets/pexels-rajitha-fernando-525223-1259789.webp';
import img15 from '../../assets/pexels-roshan-36537671.webp';
import img16 from '../../assets/pexels-ruwan-lakmal-326724272-33404365.webp';
import img17 from '../../assets/pexels-samiulhaquebhuyan-30563640.webp';
import img18 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873202.webp';
import img19 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873300.webp';
import img20 from '../../assets/rome_city.webp';

const testimonialsData = [
  { 
    id: 1, 
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    text: "The Ella mountain trek was absolutely breathtaking. The guides were incredibly knowledgeable about the tea estates and the views were out of this world.",
    collage: [img1, img2, img3, img4]
  },
  { 
    id: 2, 
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "Michael Chen",
    role: "Digital Nomad",
    text: "A truly unforgettable experience in Mirissa. Everything was perfectly organized from start to finish. I can't wait for my next surfing adventure in Sri Lanka!",
    collage: [img5, img6, img7, img8]
  },
  { 
    id: 3, 
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Emma Watson",
    role: "Wildlife Photographer",
    text: "Witnessing the elephants at Yala was a dream come true. The local guides knew exactly where to find the leopards and the biodiversity is stunning.",
    collage: [img9, img10, img11, img12]
  },
  { 
    id: 4, 
    avatar: "https://i.pravatar.cc/150?img=8",
    name: "David Miller",
    role: "Culture Enthusiast",
    text: "The cultural immersion in Kandy was deep and authentic. We got to see the real heart of the country, tasting traditional Sri Lankan curries and experiencing the Temple of the Tooth.",
    collage: [img13, img14, img15, img16]
  },
  { 
    id: 5, 
    avatar: "https://i.pravatar.cc/150?img=9",
    name: "Olivia Rodrigo",
    role: "Luxury Traveler",
    text: "From the luxurious boutique hotels in Galle Fort to the scenic train rides, every moment in Sri Lanka was picture perfect. Highly recommended agency.",
    collage: [img17, img18, img19, img20]
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // Initially item with id=3 (index 2) is at 0 degrees

  const activeTestimonial = testimonialsData[activeIndex];

  useGSAP(() => {
    // 1. ScrollTrigger Animation for the text and fan cards
    gsap.set(".scatter-card", { 
      transformOrigin: "center center",
      opacity: 0,
      scale: 0.8
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".feedback-text-content", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    tl.to(".scatter-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.4");

    // 2. Continuous Orbit Animation for the avatars
    let turn = 30;
    
    // Setup initial positions
    gsap.set(".testi-box", { transformOrigin: "-180px center" }); // Radius adjusted for the new layout
    
    gsap.set("#t-box1", { rotation: -(2 * turn) });
    gsap.set("#t-box2", { rotation: -turn });
    gsap.set("#t-box3", { rotation: 0 });
    gsap.set("#t-box4", { rotation: turn });
    gsap.set("#t-box5", { rotation: turn * 2 });

    let turnCount = 6;
    let autoPlayTimer;
    
    function boxTurn() {
      turnCount--;

      gsap.set("#t-box" + turnCount, { rotation: -(3 * turn) });

      // Animate content change
      const contentTl = gsap.timeline();
      contentTl.to(".dynamic-content", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setActiveIndex(prev => (prev === 0 ? 4 : prev - 1));
        }
      }).to(".dynamic-content", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(".testi-box", {
        rotation: "+=" + turn,
        duration: 1.6,
        ease: "power2.inOut",
        onComplete: () => {
          autoPlayTimer = setTimeout(boxTurn, 2500);
        }
      });
      
      if (turnCount === 1) {
        turnCount = 6;
      }
    }

    // Start orbit loop
    autoPlayTimer = setTimeout(boxTurn, 3000);

    return () => {
      clearTimeout(autoPlayTimer);
    };
  }, { scope: containerRef });

  return (
    <section className="feedback-section" ref={containerRef}>
      {/* SPINNER ON LEFT CORNER */}
      <div className="feedback-spinner-side">
        <div className="testi-parentCircle">
          {/* The orbiting avatars */}
          {testimonialsData.map((item, index) => (
            <div 
              key={item.id} 
              className={`testi-box ${activeIndex === index ? 'active' : ''}`}
              id={`t-box${item.id}`}
              style={{ backgroundImage: `url(${item.avatar})` }}
            >
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-content-wrapper">
        <div className="feedback-text-side">
          <div className="feedback-card dynamic-content">
            <div className="feedback-card-header">
              <div className="feedback-logo">Logoipsum</div>
              <div className="feedback-rating">
                <span className="star-icon">★</span> Rated 4.9 Star on Google
              </div>
            </div>
            
            <div className="feedback-card-body">
              "{activeTestimonial.text}"
            </div>

            <div className="feedback-card-divider"></div>

            <div className="feedback-card-footer">
              <div className="feedback-author-info">
                <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="author-avatar" />
                <div className="author-details">
                  <div className="author-name">{activeTestimonial.name}</div>
                  <div className="author-role">{activeTestimonial.role}</div>
                </div>
              </div>
              <div className="feedback-action">
                Read Case Study <span>→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feedback-images-side">
          {/* Scatter Polaroid Collage */}
          <div className="scatter-collage-container dynamic-content">
            <div className="scatter-card scatter-card-1" style={{ backgroundImage: `url('${activeTestimonial.collage[0]}')` }}></div>
            <div className="scatter-card scatter-card-2" style={{ backgroundImage: `url('${activeTestimonial.collage[1]}')` }}></div>
            <div className="scatter-card scatter-card-3" style={{ backgroundImage: `url('${activeTestimonial.collage[2]}')` }}></div>
            <div className="scatter-card scatter-card-4" style={{ backgroundImage: `url('${activeTestimonial.collage[3]}')` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
