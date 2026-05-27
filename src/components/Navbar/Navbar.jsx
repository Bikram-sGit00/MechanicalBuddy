import './Navbar.css';

import {
  IoNotificationsOutline,
} from 'react-icons/io5';

import {
  HiOutlineLocationMarker,
} from 'react-icons/hi';

import {
  useState,
} from 'react';

import ProfileModal from '../ProfileModal/ProfileModal';

const Navbar = () => {

  const [showProfileModal, setShowProfileModal] =
    useState(false);

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
            src="https://i.pravatar.cc/100"
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
          />

        )
      }

    </>

  );
};

export default Navbar;