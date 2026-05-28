import './MechanicDashboardContent.css';

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
} from 'react-leaflet';

import {
  CheckCircle,
  XCircle,
  MapPinned,
  Clock3,
  User,
} from 'lucide-react';

const mechanicPosition = [
  22.5726,
  88.3639
];

const customerPosition = [
  22.5826,
  88.3739
];

const MechanicDashboardContent = () => {

  return (

    <div className="mechanic-dashboard">

      <div className="dashboard-top">

        <div>

          <h1>
            Mechanic Dashboard
          </h1>

          <p>
            Manage requests and track customers live
          </p>

        </div>

        <div className="online-status">

          <span></span>

          ONLINE

        </div>

      </div>

      <div className="dashboard-grid">

        <div className="request-card">

          <div className="request-top">

            <div className="customer-avatar">
              <User size={24} />
            </div>

            <div>

              <h3>
                Rahul Customer
              </h3>

              <p>
                Emergency Breakdown
              </p>

            </div>

          </div>

          <div className="request-info">

            <div>

              <MapPinned size={18} />

              1.2 km away

            </div>

            <div>

              <Clock3 size={18} />

              ETA 8 min

            </div>

          </div>

          <div className="request-buttons">

            <button className="accept-btn">

              <CheckCircle size={18} />

              Accept

            </button>

            <button className="reject-btn">

              <XCircle size={18} />

              Reject

            </button>

          </div>

        </div>

        <div className="dashboard-map">

          <MapContainer
            center={mechanicPosition}
            zoom={13}
            className="map-view"
          >

            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <Marker
              position={mechanicPosition}
            />

            <Marker
              position={customerPosition}
            />

            <Polyline
              positions={[
                mechanicPosition,
                customerPosition
              ]}
              pathOptions={{
                color: '#2563eb',
                weight: 5,
              }}
            />

          </MapContainer>

        </div>

      </div>

    </div>

  );

};

export default MechanicDashboardContent;