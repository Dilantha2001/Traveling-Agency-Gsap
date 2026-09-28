import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873202.webp';
import img2 from '../../assets/peographic-temple-3649292_1920.webp';
import img3 from '../../assets/amanjahemal-trains-5227361_1920.webp';

const teamMembers = [
  {
    name: "Emma Brooks",
    role: "Founder & CEO",
    image: img1
  },
  {
    name: "Sophia Bennett",
    role: "Head of Operations",
    image: img2
  },
  {
    name: "Daniel Carter",
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
