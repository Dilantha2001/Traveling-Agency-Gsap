import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Destinations.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../assets/maldives_beach.webp'; // Mirissa
import img2 from '../../assets/niwantha_niluka-mountain-7897203_1920.webp'; // Ella
import img3 from '../../assets/coast.webp'; // Galle Fort
import img4 from '../../assets/peographic-temple-3649292_1920.webp'; // Kandy
import img5 from '../../assets/safari_savanna.webp'; // Yala
import img6 from '../../assets/amanjahemal-trains-5227361_1920.webp'; // Nuwara Eliya
import img7 from '../../assets/oleksandrpidvalnyi-ocean-7029117_1920.webp'; // Trinco
import img8 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873202.webp'; // Sigiriya
import img9 from '../../assets/nharshanahw-elephant-3903267_1920.webp'; // Minneriya

const packagesData = [
  {
    id: 1,
    country: 'Sri Lanka',
    title: 'Mirissa Beach Escape',
    description: 'Experience stunning golden beaches, whale watching, and vibrant nightlife.',
    price: '299',
    category: 'Beach',
    image: img1
  },
  {
    id: 2,
    country: 'Sri Lanka',
    title: 'Ella Mountain Adventure',
    description: 'Experience breathtaking mountain views, crystal-clear waterfalls, and tea estates.',
    price: '199',
    category: 'Adventure',
    image: img2
  },
  {
    id: 3,
    country: 'Sri Lanka',
    title: 'Galle Fort Heritage',
    description: 'Savor exquisite cuisine, explore colonial landmarks, and enjoy beautiful sunsets.',
    price: '399',
    category: 'Luxury',
    image: img3
  },
  {
    id: 4,
    country: 'Sri Lanka',
    title: 'Kandy Cultural Tour',
    description: 'Discover ancient temples, traditional dances, and the sacred Temple of the Tooth.',
    price: '249',
    category: 'Cultural',
    image: img4
  },
  {
    id: 5,
    country: 'Sri Lanka',
    title: 'Yala Wildlife Safari',
    description: 'Witness leopards and elephants in their natural habitat on thrilling game drives.',
    price: '349',
    category: 'Wildlife',
    image: img5
  },
  {
    id: 6,
    country: 'Sri Lanka',
    title: 'Nuwara Eliya Road Trip',
    description: 'Hit the winding roads and experience the ultimate Little England getaway.',
    price: '289',
    category: 'Road Trip',
    image: img6
  },
  {
    id: 7,
    country: 'Sri Lanka',
    title: 'Trinco Tropical Paradise',
    description: 'Relax on pristine white sands and swim in crystal clear eastern waters.',
    price: '499',
    category: 'Beach',
    image: img7
  },
  {
    id: 8,
    country: 'Sri Lanka',
    title: 'Sigiriya Rock Fortress',
    description: 'Climb the ancient rock, explore ruins, and experience rich history.',
    price: '150',
    category: 'Cultural',
    image: img8
  },
  {
    id: 9,
    country: 'Sri Lanka',
    title: 'Minneriya Elephant Gathering',
    description: 'Journey deep into the park and explore the largest gathering of wild elephants.',
    price: '299',
    category: 'Wildlife',
    image: img9
  }
];

const filters = ['All Options', 'Adventure', 'Beach', 'Luxury', 'Cultural', 'Wildlife', 'Road Trip'];

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('All Options');
  const containerRef = useRef(null);
  
  const filteredPackages = activeFilter === 'All Options' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === activeFilter);

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".dest-header > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className="destinations-section" ref={containerRef}>
      <div className="dest-container">
        
        {/* Header */}
        <div className="dest-header">
          <h2 className="dest-main-title">Select Your Dream Destination</h2>
          
          {/* Filters */}
          <div className="dest-filters">
            {filters.map(filter => (
              <button 
                key={filter} 
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="dest-grid">
          {filteredPackages.map(pkg => (
            <div className="dest-card" key={pkg.id}>
              <div className="dest-card-top">
                <span className="dest-country">{pkg.country}</span>
                <div className="dest-title-row">
                  <h3 className="dest-name">{pkg.title}</h3>
                  <div className="dest-price">
                    <span className="price-from">From</span>
                    <span className="price-val">$ {pkg.price}</span>
                  </div>
                </div>
                <p className="dest-desc">{pkg.description}</p>
              </div>
              <div className="dest-img-wrapper">
                <img src={pkg.image} alt={pkg.title} className="dest-img" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
