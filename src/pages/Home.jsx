import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import LiveTracking from '../components/LiveTracking/LiveTracking';
import Services from '../components/Services/Services';
import MechanicCard from '../components/MechanicCard/MechanicCard';
import FooterStats from '../components/FooterStats/FooterStats';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-grid container">
        <div>
          <Hero />
          <Services />
        </div>

        <div>
          <LiveTracking />
          <MechanicCard />
        </div>
      </div>

      <FooterStats />
    </>
  );
};

export default Home;