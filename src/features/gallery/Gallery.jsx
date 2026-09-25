import React, { useState } from 'react';
import './Gallery.css';

const panelsData = [
  {
    id: 1,
    title: 'Sigiriya Rock',
    images: [
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    title: 'Ella Mountains',
    images: [
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'Mirissa Beach',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    title: 'Yala Safari',
    images: [
      'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 5,
    title: 'Galle Fort',
    images: [
      'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Sri Lanka Destinations</h2>
        <p>Hover over any panel to reveal the destination</p>
      </div>
      <div className="gallery-container" onMouseLeave={() => setActiveId(1)}>
        {panelsData.map(panel => (
          <div
            key={panel.id}
            className={`panel ${activeId === panel.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveId(panel.id)}
          >
            <div className="panel-collage">
              {panel.images.map((img, index) => (
                <img key={index} src={img} alt={`${panel.title} ${index}`} className="collage-img" />
              ))}
            </div>
            <div className="panel-overlay"></div>
            <div className="panel-gradient"></div>
            <h3>{panel.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
