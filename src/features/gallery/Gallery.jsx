import React, { useState } from 'react';
import './Gallery.css';

import imgCult1 from '../../assets/peographic-temple-3649292_1920.webp';
import imgCult2 from '../../assets/sigiiriya.webp';
import imgCult3 from '../../assets/culturee.png';
import imgCult4 from '../../assets/pexels-harsha-bokalawala-706195915-36002646.webp';

import imgHill1 from '../../assets/amanjahemal-trains-5227361_1920.webp';
import imgHill2 from '../../assets/niwantha_niluka-mountain-7897203_1920.webp';
import imgHill3 from '../../assets/mountain.webp';
import imgHill4 from '../../assets/temp (7).jfif';

import imgBeach1 from '../../assets/oleksandrpidvalnyi-ocean-7029117_1920.webp';
import imgBeach2 from '../../assets/coast.webp';
import imgBeach3 from '../../assets/maldives_beach.webp';
import imgBeach4 from '../../assets/hill.jfif';

import imgWild1 from '../../assets/nharshanahw-elephant-3903267_1920.webp';
import imgWild2 from '../../assets/safari_savanna.webp';
import imgWild3 from '../../assets/wild22 (1).jfif';
import imgWild4 from '../../assets/wild22 (2).jfif';

import imgView1 from '../../assets/2nd.webp';
import imgView2 from '../../assets/pexels-thilina-alagiyawanna-3266092-31032902.webp';
import imgView3 from '../../assets/pexels-gihans-11309702.webp';
import imgView4 from '../../assets/pexels-pexels-user-178764159-11166072.webp';

const panelsData = [
  {
    id: 1,
    title: 'Cultural Heritage',
    images: [imgCult1, imgCult2, imgCult3, imgCult4]
  },
  {
    id: 2,
    title: 'Hill Country',
    images: [imgHill1, imgHill2, imgHill3, imgHill4]
  },
  {
    id: 3,
    title: 'Tropical Beaches',
    images: [imgBeach1, imgBeach2, imgBeach3, imgBeach4]
  },
  {
    id: 4,
    title: 'Wildlife Safari',
    images: [imgWild1, imgWild2, imgWild3, imgWild4]
  },
  {
    id: 5,
    title: 'Scenic Views',
    images: [imgView1, imgView2, imgView3, imgView4]
  }
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(3);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Sri Lanka Destinations</h2>
        <p>Hover over any panel to reveal the destination</p>
      </div>
      <div className="gallery-container" onMouseLeave={() => setActiveId(3)}>
        {panelsData.map(panel => (
          <div
            key={panel.id}
            className={`panel ${activeId === panel.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveId(panel.id)}
            onClick={() => setActiveId(panel.id)}
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
