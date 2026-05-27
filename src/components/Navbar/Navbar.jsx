import './Navbar.css';

import {
  IoNotificationsOutline,
} from 'react-icons/io5';

import {
  HiOutlineLocationMarker,
} from 'react-icons/hi';

import {
  useState,
  useEffect,
} from 'react';

import ProfileModal from '../ProfileModal/ProfileModal';

const Navbar = () => {

  const [showProfileModal, setShowProfileModal] =
    useState(false);

  const [userData, setUserData] =
    useState(null);

  useEffect(() => {

    const customer =
      localStorage.getItem('customer');

    const mechanic =
      localStorage.getItem('mechanic');

    if (customer) {

      setUserData(
        JSON.parse(customer)
      );

    }

    else if (mechanic) {

      setUserData(
        JSON.parse(mechanic)
      );

    }

  }, []);

  return (

    <>

      <nav className="navbar container">

        <div className="logo-area">

          <div className="logo-box">

            <img
              id="logo"
              src="assets/logo.png"
              alt="Logo"
            />

          </div>

          <div className="logo-text-area">

            <img
              id="logo2"
              src="assets/logo2.png"
              alt="Mechanical Buddy"
            />

            <p className="logo-subtitle">
              Smart Automotive Assistance
            </p>

          </div>

        </div>

        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Services</li>
          <li>Mechanics</li>
          <li>Emergency</li>
        </ul>

        <div className="nav-right">

          <div className="location-box">

            <HiOutlineLocationMarker />

            Rajpur Sonarpur, West Bengal

          </div>

          <div className="notification">

            <IoNotificationsOutline />

            <span></span>

          </div>

          <img
            src={
              userData
                ? 'https://i.pravatar.cc/100'
                : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt="profile"
            className="profile"
            onClick={() =>
              setShowProfileModal(true)
            }
          />

        </div>

      </nav>

      {

        showProfileModal && (

          <ProfileModal

            closeModal={() =>
              setShowProfileModal(false)
            }

            userData={userData}

            setUserData={setUserData}

          />

        )

      }

    </>

  );

};

export default Navbar;