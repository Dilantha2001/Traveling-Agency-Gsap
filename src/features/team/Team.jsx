import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/ceo (1).jpg';
import img2 from '../../assets/ceo (2).jpg';
import img3 from '../../assets/ceo (3).jpg';

const teamMembers = [
  {
    name: "Sanduni Silva",
    role: "Founder & CEO",
    image: img1
  },
  {
    name: "Kasun Perera",
    role: "Head of Operations",
    image: img2
  },
  {
    name: "Nuwan Jayasooriya",
    role: "Lead Guide",
    image: img3
  }
];

const Team = () => {
  const containerRef = useRef(null);



  return (
    <section className="team-section" ref={containerRef}>
      <div className="team-container">
        
        {/* Header */}
        <div className="team-header">
          <span className="team-tag">(OUR TEAM)</span>
          <h2 className="team-title">Meet the People Behind<br/>Every Journey</h2>
        </div>

        {/* Cards */}
        <div className="team-cards-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card reveal-scale-up" key={index}>
              <h3 className="team-member-name">{member.name}</h3>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <div className="team-role-badge">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
