import './Hero.css';

import { FiArrowRight } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';

import {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineStar,
} from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="hero-left">
      <div className="live-tag">
        <span></span>
        LIVE & READY TO HELP
      </div>

      <h1>
        Modern Roadside
        <br />
        <span>Assistance Platform</span>
      </h1>

      <p>
        Connect with nearby mechanics instantly, track live assistance,
        and get back on the road with confidence.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">
          Find Mechanic
          <FiArrowRight />
        </button>

        <button className="secondary-btn">
          <BsTelephone />
          Emergency SOS
        </button>
      </div>

      <div className="stats-row">
        <div className="stat-box">
          <HiOutlineShieldCheck />

          <div>
            <h4>500+</h4>
            <p>Verified Mechanics</p>
          </div>
        </div>

        <div className="stat-box">
          <HiOutlineLightningBolt />

          <div>
            <h4>&lt; 15 min</h4>
            <p>Avg. Response Time</p>
          </div>
        </div>

        <div className="stat-box">
          <HiOutlineStar />

          <div>
            <h4>4.8/5</h4>
            <p>Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;