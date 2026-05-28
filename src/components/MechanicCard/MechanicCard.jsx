import "./MechanicCard.css";
import axios from "axios";

import {
  BsChatDots,
  BsTelephone,
  BsStarFill,
  BsPatchCheckFill,
} from "react-icons/bs";

import { useEffect, useRef, useState } from "react";
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;

  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const MechanicCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [mechanics, setMechanics] = useState([]);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/mechanics");
        const manualLocation = JSON.parse(
          localStorage.getItem("manualLocation"),
        );

        const userLat = manualLocation ? manualLocation.lat : 22.5726;

        const userLng = manualLocation ? manualLocation.lng : 88.3639;

        const formattedMechanics = response.data

          .filter(
            (mechanic) =>
              mechanic.currentLocation &&
              mechanic.currentLocation.lat &&
              mechanic.currentLocation.lng,
          )

          .map((mechanic, index) => ({
            id: mechanic._id,

            name: mechanic.name,

            image: `https://i.pravatar.cc/300?img=${index + 10}`,

            distance: `${calculateDistance(
              userLat,
              userLng,

              mechanic.currentLocation.lat,

              mechanic.currentLocation.lng,
            ).toFixed(1)} km away`,

            rating: `4.${Math.floor(Math.random() * 9)} (${Math.floor(
              Math.random() * 200,
            )} reviews)`,

            experience: `${Math.floor(Math.random() * 8) + 1}+ Years Experience`,

            skills: ["Engine Repair", "Battery", "Emergency"],
          }));
        formattedMechanics.sort((a, b) => {
          return parseFloat(a.distance) - parseFloat(b.distance);
        });

        setMechanics(formattedMechanics);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMechanics();
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    let isScrolling = false;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) =>
          prev < mechanics.length - 1 ? prev + 1 : prev,
        );
      } else {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => {
        isScrolling = false;
      }, 450);
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };
  }, [mechanics, activeIndex]);

  return (
    <div className="mechanic-wrapper" ref={wrapperRef}>
      {mechanics.map((mechanic, index) => {
        const offset = index - activeIndex;

        return (
          <div
            key={mechanic.id}
            className="mechanic-card"
            style={{
              transform: `
                translateY(${offset * 38}px)
                scale(${1 - Math.abs(offset) * 0.04})
              `,

              opacity: offset === 0 ? 1 : offset === 1 ? 0.65 : 0,

              filter: offset === 0 ? "blur(0px)" : "blur(1.2px)",

              zIndex: mechanics.length - Math.abs(offset),

              pointerEvents: offset === 0 ? "auto" : "none",
            }}
          >
            <img src={mechanic.image} alt="mechanic" className="mechanic-img" />

            <div className="mechanic-content">
              <div className="mechanic-top">
                <div>
                  <h2>
                    {mechanic.name}

                    <BsPatchCheckFill className="verified-icon" />
                  </h2>

                  <p>{mechanic.distance}</p>
                </div>

                <div className="available-badge">
                  <span></span>
                  AVAILABLE
                </div>
              </div>

              <div className="mechanic-info">
                <div>
                  <BsStarFill />
                  {mechanic.rating}
                </div>

                <div>{mechanic.experience}</div>
              </div>

              <div className="skill-tags">
                {mechanic.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>

              <div className="mechanic-actions">
                <button
                  className="request-btn"
                  onClick={async () => {
                    try {
                      const customer = JSON.parse(
                        localStorage.getItem("customer"),
                      );

                      const manualLocation = JSON.parse(
                        localStorage.getItem("manualLocation"),
                      );

                      await axios.post(
                        "http://localhost:5000/api/requests/create",

                        {
                          customerId: customer?._id,

                          mechanicId: mechanic.id,

                          customerName: customer?.name,

                          vehicleNumber: "WB 12 AB 1234",

                          issue: "Emergency Breakdown",

                          customerLocation: {
                            lat: manualLocation?.lat,

                            lng: manualLocation?.lng,
                          },
                        },
                      );

                      alert("Request sent to mechanic");
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Request Assistance
                </button>
                <button className="icon-btn">
                  <BsChatDots />
                </button>

                <button className="icon-btn">
                  <BsTelephone />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MechanicCard;
