import './Services.css';

import {
  FiTool,
  FiArrowRight,
} from 'react-icons/fi';

import {
  BsFuelPump,
  BsBatteryCharging,
} from 'react-icons/bs';

const Services = () => {
  return (
    <div className="services-grid">
      <div className="service-card glass-card">
        <div className="service-icon blue">
          <FiTool />
        </div>

        <h3>Repair</h3>

        <p>
          Instant mechanic support at your location.
        </p>

        <button>
          <FiArrowRight />
        </button>
      </div>

      <div className="service-card glass-card">
        <div className="service-icon green">
          <BsFuelPump />
        </div>

        <h3>Fuel Delivery</h3>

        <p>
          Emergency fuel delivery when you need it.
        </p>

        <button>
          <FiArrowRight />
        </button>
      </div>

      <div className="service-card glass-card">
        <div className="service-icon purple">
          <BsBatteryCharging />
        </div>

        <h3>Battery Jumpstart</h3>

        <p>
          Get your battery checked and jumpstarted.
        </p>

        <button>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;