import './FooterStats.css';

import {
  BsHeadset,
  BsShieldCheck,
  BsClock,
} from 'react-icons/bs';

import { HiOutlineLocationMarker } from 'react-icons/hi';

const FooterStats = () => {
  return (
    <div className="footer-wrapper container">
      <div className="footer-card glass-card">
        <BsHeadset />
        <div>
          <h3>24/7 Support</h3>
          <p>We're here anytime you need us</p>
        </div>
      </div>

      <div className="footer-card glass-card">
        <HiOutlineLocationMarker />
        <div>
          <h3>Real-time Tracking</h3>
          <p>Track your mechanic live</p>
        </div>
      </div>

      <div className="footer-card glass-card">
        <BsShieldCheck />
        <div>
          <h3>Secure & Reliable</h3>
          <p>Verified professionals only</p>
        </div>
      </div>

      <div className="footer-card glass-card">
        <BsClock />
        <div>
          <h3>Quick Response</h3>
          <p>Get help in minutes</p>
        </div>
      </div>
    </div>
  );
};

export default FooterStats;