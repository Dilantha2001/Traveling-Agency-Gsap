import React, { useState } from 'react';
import './Gallery.css';

import img1 from '../../assets/amanjahemal-trains-5227361_1920.webp';
import img2 from '../../assets/niwantha_niluka-mountain-7897203_1920.webp';
import img3 from '../../assets/oleksandrpidvalnyi-ocean-7029117_1920.webp';
import img4 from '../../assets/peographic-temple-3649292_1920.webp';
import img5 from '../../assets/pexels-andromeda99-17801597.webp';
import img6 from '../../assets/pexels-charithk-6337422.webp';
import img7 from '../../assets/pexels-dulshan-33080670.webp';
import img8 from '../../assets/pexels-gihans-11309702.webp';
import img9 from '../../assets/pexels-harsha-bokalawala-706195915-36002646.webp';
import img10 from '../../assets/pexels-pexels-user-178764159-11166072.webp';
import img11 from '../../assets/pexels-rajitha-fernando-525223-1259789.webp';
import img12 from '../../assets/pexels-roshan-36537671.webp';
import img13 from '../../assets/pexels-ruwan-lakmal-326724272-33404365.webp';
import img14 from '../../assets/pexels-samiulhaquebhuyan-30563640.webp';
import img15 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873202.webp';
import img16 from '../../assets/pexels-thilina-alagiyawanna-3266092-36873300.webp';
import img17 from '../../assets/nharshanahw-elephant-3903267_1920.webp';
import img18 from '../../assets/safari_savanna.webp';
import img19 from '../../assets/maldives_beach.webp';
import img20 from '../../assets/coast.webp';

const panelsData = [
  {
    id: 1,
    title: 'Cultural Heritage',
    images: [img4, img6, img13, img15]
  },
  {
    id: 2,
    title: 'Hill Country',
    images: [img1, img2, img7, img8]
  },
  {
    id: 3,
    title: 'Tropical Beaches',
    images: [img3, img5, img11, img14]
  },
  {
    id: 4,
    title: 'Wildlife Safari',
    images: [img17, img18, img9, img12]
  },
  {
    id: 5,
    title: 'Scenic Views',
    images: [img10, img16, img19, img20]
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
