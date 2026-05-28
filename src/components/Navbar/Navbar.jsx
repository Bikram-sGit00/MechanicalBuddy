import "./Navbar.css";

import { IoNotificationsOutline } from "react-icons/io5";

import { HiOutlineLocationMarker } from "react-icons/hi";

import { useState, useEffect } from "react";

import ProfileModal from "../ProfileModal/ProfileModal";
import axios from "axios";

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [userData, setUserData] = useState(null);

  const [customLocation, setCustomLocation] = useState("");

  const [displayLocation, setDisplayLocation] = useState(
    "Rajpur Sonarpur, West Bengal",
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        localStorage.removeItem("manualLocation");

        localStorage.setItem(
          "liveLocation",

          JSON.stringify({
            lat: position.coords.latitude,

            lng: position.coords.longitude,
          }),
        );
      },

      (error) => {
        console.log(error);
      },
    );
    const customer = localStorage.getItem("customer");

    const mechanic = localStorage.getItem("mechanic");

    if (customer) {
      setUserData(JSON.parse(customer));
    } else if (mechanic) {
      setUserData(JSON.parse(mechanic));
    }
  }, []);

  return (
    <>
      <nav className="navbar container">
        <div className="logo-area">
          <div className="logo-box">
            <img id="logo" src="assets/logo.png" alt="Logo" />
          </div>

          <div className="logo-text-area">
            <img id="logo2" src="assets/logo2.png" alt="Mechanical Buddy" />

            <p className="logo-subtitle">Smart Automotive Assistance</p>
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

            <input
              type="text"
              placeholder="Enter location"
              value={customLocation}
              onChange={(e) => setCustomLocation(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  try {
                    const response = await axios.get(
                      `https://nominatim.openstreetmap.org/search?format=json&q=${customLocation}`,
                    );

                    if (response.data.length > 0) {
                      const place = response.data[0];

                      const locationData = {
                        lat: parseFloat(place.lat),

                        lng: parseFloat(place.lon),

                        name: customLocation,
                      };

                      localStorage.setItem(
                        "manualLocation",

                        JSON.stringify(locationData),
                      );

                      setDisplayLocation(customLocation);

                      alert("Location updated");
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
              }}
              className="location-input"
            />
          </div>

          <div className="notification">
            <IoNotificationsOutline />

            <span></span>
          </div>

          <img
            src={
              userData
                ? "https://i.pravatar.cc/100"
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="profile"
            onClick={() => setShowProfileModal(true)}
          />
        </div>
      </nav>

      {showProfileModal && (
        <ProfileModal
          closeModal={() => setShowProfileModal(false)}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
};

export default Navbar;
