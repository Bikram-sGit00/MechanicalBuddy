import './ProfileModal.css';

import {
  FiUser,
  FiClock,
  FiGlobe,
  FiHelpCircle,
  FiUsers,
  FiLogOut,
} from 'react-icons/fi';

import {
  useNavigate,
} from 'react-router-dom';

const ProfileModal = ({ closeModal }) => {

  const navigate = useNavigate();

  return (

    <div
      className="profile-overlay"
      onClick={closeModal}
    >

      <div
        className="profile-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="profile-top">

          <div className="profile-avatar-wrapper">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-avatar"
            />

            <span className="online-dot"></span>

          </div>

          <div>

            <h3>Mechanical Buddy</h3>

            <p>
              mechanicalbuddy@example.com
            </p>

          </div>

        </div>

        <div className="profile-menu">

          <button
            className="menu-item"
            onClick={() => {
              closeModal();
              navigate('/division');
            }}
          >
            <FiUser />
            Sign In / Sign Up
          </button>

          <button className="menu-item language-btn">

            <div className="language-left">
              <FiGlobe />
              Language
            </div>

            <span>▼</span>

          </button>

          <button className="menu-item">
            <FiClock />
            Booking History
          </button>

          <button className="menu-item">
            <FiHelpCircle />
            Support
          </button>

          <button className="menu-item">
            <FiUsers />
            Community
          </button>

          <button className="menu-item logout-btn">
            <FiLogOut />
            Sign Out
          </button>

        </div>

      </div>

    </div>

  );
};

export default ProfileModal;