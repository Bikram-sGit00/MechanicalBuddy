import "./LiveTracking.css";

import axios from "axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  ZoomControl,
  useMap,
} from "react-leaflet";

import { useEffect, useState } from "react";

import L from "leaflet";

import { Clock3, MapPinned, CarFront } from "lucide-react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const carIcon = new L.DivIcon({
  html: `

    <div class="car-marker">

      <div class="car-marker-inner">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >

          <path d="M14 16H9m10 0h2m-2 0v-3.34a2 2 0 0 0-.21-.9l-1.26-2.52A2 2 0 0 0 15.74 8H8.26a2 2 0 0 0-1.79 1.24L5.21 11.76a2 2 0 0 0-.21.9V16m14 0H5m0 0H3m2 0v2a1 1 0 0 0 1 1h1m11-3v2a1 1 0 0 1-1 1h-1"/>
          <circle cx="7.5" cy="16.5" r="1.5"/>
          <circle cx="16.5" cy="16.5" r="1.5"/>

        </svg>

      </div>

      <div class="car-number">
        WB 12 AB 1234
      </div>

    </div>

  `,

  className: "",
  iconSize: [140, 50],
});

const MapUpdater = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 13, {
      duration: 1.5,
    });
  }, [center]);

  return null;
};

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

const LiveTracking = () => {
  const [userPosition, setUserPosition] = useState([22.5726, 88.3639]);

  const [mechanicPosition, setMechanicPosition] = useState(null);

  const [distance, setDistance] = useState("0");

  const [eta, setEta] = useState("0");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      },

      (error) => {
        console.log(error);
      },
    );
  }, []);

  useEffect(() => {
    const fetchNearestMechanic = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/mechanics");

        const mechanics = response.data.filter(
          (mechanic) =>
            mechanic.currentLocation &&
            mechanic.currentLocation.lat &&
            mechanic.currentLocation.lng,
        );

        if (mechanics.length === 0) return;

        const sortedMechanics = mechanics.sort((a, b) => {
          const distanceA = calculateDistance(
            userPosition[0],

            userPosition[1],

            a.currentLocation.lat,

            a.currentLocation.lng,
          );

          const distanceB = calculateDistance(
            userPosition[0],

            userPosition[1],

            b.currentLocation.lat,

            b.currentLocation.lng,
          );

          return distanceA - distanceB;
        });

        const selectedMechanic = JSON.parse(
          localStorage.getItem("selectedMechanic"),
        );

        let trackedMechanic;

        if (selectedMechanic) {
          trackedMechanic = sortedMechanics.find(
            (mechanic) => mechanic._id === selectedMechanic.id,
          );
        } else {
          trackedMechanic = sortedMechanics[0];
        }
        const liveDistance = calculateDistance(
          userPosition[0],

          userPosition[1],

          trackedMechanic.currentLocation.lat,

          trackedMechanic.currentLocation.lng,
        );

        setDistance(liveDistance.toFixed(1));

        setEta(Math.max(1, Math.floor(liveDistance * 4)).toString());

        setMechanicPosition([
          trackedMechanic.currentLocation.lat,

          trackedMechanic.currentLocation.lng,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNearestMechanic();

    const interval = setInterval(fetchNearestMechanic, 5000);

    return () => clearInterval(interval);
  }, [userPosition]);

  return (
    <div className="tracking-box">
      <div className="tracking-header">
        <div>
          <h2>Live Tracking</h2>

          <p>Tracking mechanic location</p>
        </div>

        <div className="live-indicator">
          <span></span>
          LIVE
        </div>
      </div>

      <MapContainer
        center={userPosition}
        zoom={13}
        zoomControl={false}
        className="map-container"
      >
        <MapUpdater center={userPosition} />

        <ZoomControl position="topleft" />

        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        <Marker position={userPosition} />

        {mechanicPosition && (
          <>
            <Marker position={mechanicPosition} icon={carIcon} />

            <Polyline
              positions={[userPosition, mechanicPosition]}
              pathOptions={{
                color: "#2563eb",
                weight: 5,
                lineCap: "round",
                lineJoin: "round",
              }}
            />
          </>
        )}
      </MapContainer>

      <div className="bottom-info">
        <div className="info-item">
          <div className="icon-box">
            <Clock3 size={18} />
          </div>

          <div>
            <h4>ETA</h4>

            <p>{eta} min</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="info-item">
          <div className="icon-box">
            <MapPinned size={18} />
          </div>

          <div>
            <h4>Distance</h4>

            <p>{distance} km</p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="info-item">
          <div className="icon-box">
            <CarFront size={18} />
          </div>

          <div>
            <h4>Vehicle</h4>

            <p>WB 12 AB 1234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
