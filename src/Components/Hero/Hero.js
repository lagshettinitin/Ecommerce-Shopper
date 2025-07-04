import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="hero container-fluid px-4">
      <div className="hero-wrapper d-flex flex-column flex-md-row align-items-center">
        {/* LEFT */}
        <div className="hero-left w-100 w-md-50">
          <h2>NEEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right w-100 w-md-50 text-center">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
