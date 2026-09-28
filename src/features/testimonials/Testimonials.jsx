import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/tour (1).jfif';
import img2 from '../../assets/tour (2).jfif';
import img3 from '../../assets/tour (3).jfif';
import img4 from '../../assets/tour (4).jfif';
import img5 from '../../assets/tour (5).jfif';
import img6 from '../../assets/tour (6).jfif';
import img7 from '../../assets/tour (7).jfif';
import img8 from '../../assets/tour (8).jfif';
import img9 from '../../assets/temp (1).jfif';
import img10 from '../../assets/temp (2).jfif';
import img11 from '../../assets/temp (3).jfif';
import img12 from '../../assets/temp (4).jfif';
import img13 from '../../assets/temp (5).jfif';
import img14 from '../../assets/temp (6).jfif';
import img15 from '../../assets/temp (7).jfif';
import img16 from '../../assets/temp (8).jfif';
import img17 from '../../assets/temp (9).jfif';
import img18 from '../../assets/temp (10).jfif';
import img19 from '../../assets/temp (11).jfif';
import img20 from '../../assets/temp (12).jfif';

const testimonialsData = [
  { 
    id: 1, 
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    text: "Scaling the peaks of Ella and waking up to the mist rolling over the tea plantations was a surreal experience. Pirl's guides didn't just show us Sri Lanka; they made us feel like family. The local tea tasting was a phenomenal touch!",
    collage: [img1, img2, img3, img4]
  },
  { 
    id: 2, 
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    name: "Michael Chen",
    role: "Digital Nomad",
    text: "From the pristine shores of Mirissa to the vibrant streets of Colombo, our itinerary was flawlessly curated. Catching the sunset while surfing on the southern coast was a core memory. Absolute perfection from start to finish.",
    collage: [img5, img6, img7, img8]
  },
  { 
    id: 3, 
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    name: "Emma Watson",
    role: "Wildlife Photographer",
    text: "Our safari at Yala National Park exceeded all expectations! We witnessed leopards in their natural habitat, and the eco-lodge arranged by the agency was breathtaking. Truly an unmatched wildlife adventure in the Pearl of the Indian Ocean.",
    collage: [img9, img10, img11, img12]
  },
  { 
    id: 4, 
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    name: "David Miller",
    role: "Culture Enthusiast",
    text: "The cultural immersion in Kandy and Sigiriya was deeply moving. Climbing the Lion Rock at sunrise and savoring authentic village curries made this journey unforgettable. Their local expertise is truly unmatched.",
    collage: [img13, img14, img15, img16]
  },
  { 
    id: 5, 
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
    name: "Olivia Rodrigo",
    role: "Luxury Traveler",
    text: "Luxury travel redefined. The boutique villas in Galle Fort combined rich colonial history with modern elegance. The coastal train ride was straight out of a movie. Pirl crafted a masterpiece of a vacation for us.",
    collage: [img17, img18, img19, img20]
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // Initially item with id=3 (index 2) is at 0 degrees

  const activeTestimonial = testimonialsData[activeIndex];

  useGSAP(() => {
    // Continuous Orbit Animation for the avatars
    let turn = 30;
    
    // Setup initial positions
    gsap.set(".testi-rotator", { transformOrigin: "-190px 35px" }); // Mathematically perfect radius for 450px circle
    
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

      gsap.to(".testi-rotator", {
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
      
      {/* Testimonials Header */}
      <div className="feedback-main-header reveal-scale-up">
        <span className="feedback-tag">[TESTIMONIALS]</span>
        <h2 className="feedback-title">Stories from our Explorers</h2>
        <p className="feedback-desc">Discover the unforgettable experiences and memories created on our personalized journeys across Sri Lanka.</p>
      </div>

      {/* SPINNER ON LEFT CORNER */}
      <div className="feedback-spinner-side">
        <div className="testi-parentCircle">
          {/* The orbiting avatars */}
          {testimonialsData.map((item, index) => (
            <div 
              key={item.id} 
              className="testi-rotator"
              id={`t-box${item.id}`}
            >
              <div 
                className={`testi-box ${activeIndex === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${item.avatar})` }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-content-wrapper">
        <div className="feedback-text-side">
          <div className="feedback-card dynamic-content">
            <div className="feedback-card-header">
              <div className="feedback-quote-icon">
                <FaQuoteLeft />
              </div>
              <div className="feedback-rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <span className="rating-text">4.9 on Google</span>
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
