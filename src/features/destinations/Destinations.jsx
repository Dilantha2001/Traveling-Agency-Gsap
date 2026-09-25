import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Destinations.css';

gsap.registerPlugin(ScrollTrigger);

const packagesData = [
  {
    id: 1,
    country: 'Australia',
    title: 'Coastal Wonders',
    description: 'Experience stunning beaches, unique wildlife, and vibrant cities.',
    price: '999',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    country: 'Switzerland',
    title: 'Alpine Escape',
    description: 'Experience breathtaking mountain views, crystal-clear lakes, and charming villages.',
    price: '599',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    country: 'Italy',
    title: 'Historic Rome',
    description: 'Savor exquisite cuisine, explore historic landmarks, and enjoy beautiful landscapes.',
    price: '799',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    country: 'Japan',
    title: 'Cultural Odyssey',
    description: 'Discover ancient temples, bustling cities, and serene gardens.',
    price: '1899',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    country: 'Brazil',
    title: 'Amazon Adventure',
    description: 'Journey deep into the rainforest and explore exotic wildlife.',
    price: '699',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1518182170546-076616fd4625?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    country: 'South Africa',
    title: 'Wildlife Safari',
    description: 'Witness the big five in their natural habitat on thrilling game drives.',
    price: '899',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    country: 'USA',
    title: 'Route 66 Classic',
    description: 'Hit the open road and experience the ultimate American road trip.',
    price: '1299',
    category: 'Road Trip',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    country: 'Maldives',
    title: 'Tropical Paradise',
    description: 'Relax in overwater bungalows and swim in crystal clear waters.',
    price: '2499',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    country: 'New Zealand',
    title: 'Kiwi Explorer',
    description: 'Hike glaciers, explore fjords, and experience adrenaline activities.',
    price: '1499',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1469521669194-babbdf9aa95a?auto=format&fit=crop&w=800&q=80'
  }
];

const filters = ['All Options', 'Adventure', 'Beach', 'Luxury', 'Road Trip', 'Wildlife'];

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
