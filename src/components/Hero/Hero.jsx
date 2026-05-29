import "./Hero.css";

import { FiArrowRight } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

import {
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineStar,
} from "react-icons/hi";

import {
  useTranslation,
} from 'react-i18next';

const Hero = ({ mechanicMode }) => {
  const { t } =
  useTranslation();
  return (
    <section className="hero-left">
      <div className="live-tag">
        <span></span>
        LIVE & READY TO HELP
      </div>

      <h1>
        {t('heroTitle1')}
        <br />
        <span>{t('heroTitle2')}</span>
      </h1>

      <p>
        {t('heroDescription')}
      </p>

<div className="hero-buttons">

  {

    mechanicMode ? (

      <>

        <button className="primary-btn">

          {t('findCustomers')}

          <FiArrowRight />

        </button>

        <button className="secondary-btn">

          {t('goOffline')}

        </button>

      </>

    ) : (

      <>

        <button className="primary-btn">

          {t('findMechanic')}

          <FiArrowRight />

        </button>

        <button className="secondary-btn">

          <BsTelephone />

          {t('emergencySOS')}

        </button>

      </>

    )

  }

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
