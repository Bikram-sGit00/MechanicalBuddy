import './LiveTracking.css';

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  ZoomControl,
} from 'react-leaflet';

import L from 'leaflet';

import {
  Clock3,
  MapPinned,
  CarFront,
} from 'lucide-react';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const positionA = [22.4497, 88.3915];
const positionB = [22.5726, 88.3639];

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
  className: '',
  iconSize: [140, 50],
});

const LiveTracking = () => {
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
        center={positionB}
        zoom={11}
        zoomControl={false}
        className="map-container"
      >

        <ZoomControl position="topleft" />

        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <Marker position={positionA} />

        <Marker
          position={positionB}
          icon={carIcon}
        />

        <Polyline
          positions={[positionA, positionB]}
          pathOptions={{
            color: '#2563eb',
            weight: 5,
            lineCap: 'round',
            lineJoin: 'round',
          }}
        />

      </MapContainer>

      <div className="bottom-info">

        <div className="info-item">

          <div className="icon-box">
            <Clock3 size={18} />
          </div>

          <div>
            <h4>ETA</h4>
            <p>8 min</p>
          </div>

        </div>

        <div className="separator"></div>

        <div className="info-item">

          <div className="icon-box">
            <MapPinned size={18} />
          </div>

          <div>
            <h4>Distance</h4>
            <p>1.2 km</p>
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