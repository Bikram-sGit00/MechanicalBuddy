import Navbar from '../components/Navbar/Navbar';

import Hero from '../components/Hero/Hero';

import LiveTracking from '../components/LiveTracking/LiveTracking';

import CustomerRequestCard from '../components/CustomerRequestCard/CustomerRequestCard';

import FooterStats from '../components/FooterStats/FooterStats';

const MechanicHome = () => {

  return (

    <>

      <Navbar />

      <div className="main-grid container">

        <div>

          <Hero
            mechanicMode={true}
          />

        </div>

        <div>

          <LiveTracking
            mechanicMode={true}
          />

          <CustomerRequestCard />

        </div>

      </div>

      <FooterStats />

    </>

  );

};

export default MechanicHome;