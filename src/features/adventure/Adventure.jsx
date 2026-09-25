import React from 'react';
import './Adventure.css';

const Adventure = () => {
  return (
    <section className="adventure-section">
      <div className="adventure-container">
        
        {/* Left Side: Rotated Title */}
        <div className="adventure-left">
          <h2 className="adventure-title">01. Adventure</h2>
        </div>

        {/* Middle: Large Image */}
        <div className="adventure-middle">
          <div className="adventure-img-large-wrapper">
            <img src="/images/mountain.jpg" alt="Mountain Trekking" className="adventure-img-large" />
            <div className="adventure-badge">
              <span className="badge-icon">📌</span> Save
            </div>
            <div className="adventure-price-badge">
              <span>Buy this template</span>
              <span className="price">$99</span>
            </div>
          </div>
        </div>

        {/* Right: Three stacked images */}
        <div className="adventure-right">
          <div className="adventure-img-small-wrapper">
            <img src="/images/paragliding.jpg" alt="Paragliding" className="adventure-img-small" />
          </div>
          <div className="adventure-img-small-wrapper">
            <img src="/images/climbing.jpg" alt="Rock Climbing" className="adventure-img-small" />
          </div>
          <div className="adventure-img-small-wrapper">
            <img src="/images/surfing.jpg" alt="Surfing" className="adventure-img-small" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Adventure;
