import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  { 
    id: 1, 
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    text: "The mountain trek was absolutely breathtaking. The guides were incredibly knowledgeable and the views were out of this world.",
    collage: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80"
    ]
  },
  { 
    id: 2, 
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "Michael Chen",
    role: "CEO @ Framify",
    text: "A truly unforgettable experience. Everything was perfectly organized from start to finish. I can't wait for my next adventure!",
    collage: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80"
    ]
  },
  { 
    id: 3, 
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Emma Watson",
    role: "Wildlife Photographer",
    text: "Experience stunning beaches, unique wildlife, and vibrant cities through the eyes of our happy travelers. Their stories are our greatest achievement.",
    collage: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80"
    ]
  },
  { 
    id: 4, 
    avatar: "https://i.pravatar.cc/150?img=8",
    name: "David Miller",
    role: "Culture Enthusiast",
    text: "The cultural immersion was deep and authentic. We got to see the real heart of the country, not just the tourist spots.",
    collage: [
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
    ]
  },
  { 
    id: 5, 
    avatar: "https://i.pravatar.cc/150?img=9",
    name: "Olivia Rodrigo",
    role: "Luxury Traveler",
    text: "From the luxurious accommodations to the thrilling safaris, every moment was picture perfect. Highly recommended agency.",
    collage: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"
    ]
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
