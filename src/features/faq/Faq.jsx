import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Faq.css';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How do I book a tour?",
    answer: "Booking a tour is easy! Simply browse our destinations, select your preferred package, and click the 'Book Now' button. Follow the checkout process to secure your spot."
  },
  {
    question: "Can I customize my travel itinerary?",
    answer: "Yes. We offer personalized itineraries tailored to your interests, schedule, budget, and travel preferences."
  },
  {
    question: "What is included in your travel packages?",
    answer: "Most packages include accommodation, guided tours, local transportation, and select meals. Check the specific package details for a complete list of inclusions."
  },
  {
    question: "Do you offer group and family tours?",
    answer: "Absolutely! We have specialized packages for families, couples, and large groups, ensuring everyone has a memorable experience together."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule depending on the terms of your specific package. Please review our cancellation policy or contact support for assistance."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial state
    gsap.set([".faq-header-content > *", ".faq-item"], { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.to(".faq-header-content > *", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        });

        gsap.to(".faq-item", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        });
      }
    });
  }, { scope: containerRef });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={containerRef}>
      <div className="faq-container">
        
        {/* Left Side: Header & Intro */}
        <div className="faq-left">
          <div className="faq-header-content">
            <span className="faq-tag">[FAQ]</span>
            <h2 className="faq-title">Quick Answers</h2>
            <p className="faq-description">
              Find quick answers to common questions about our travel packages, pricing, scheduling, and booking process.
            </p>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-right">
          <div className="accordion-list">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="faq-question-container">
                    <h3 className="faq-question">{item.question}</h3>
                    <div className="faq-icon">
                      {isOpen ? (
                        <span className="icon-up">↑</span>
                      ) : (
                        <span className="icon-down">↓</span>
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className="faq-answer-wrapper" 
                    style={{ 
                      maxHeight: isOpen ? '200px' : '0px', 
                      opacity: isOpen ? 1 : 0 
                    }}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Faq;
