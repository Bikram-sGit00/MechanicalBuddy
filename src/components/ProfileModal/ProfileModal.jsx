import "./ProfileModal.css";

import {
  FiUser,
  FiClock,
  FiGlobe,
  FiHelpCircle,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import i18n from '../../i18n';

const ProfileModal = ({ closeModal, userData, setUserData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("customer");

    localStorage.removeItem("mechanicToken");

    localStorage.removeItem("mechanic");

    setUserData(null);

    closeModal();

    navigate("/");
  };

  return (
    <div className="profile-overlay" onClick={closeModal}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="profile-top">
          <div className="profile-avatar-wrapper">
            <img
              src={
                userData
                  ? "https://i.pravatar.cc/100"
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="profile"
              className="profile-avatar"
            />

            <span className="online-dot"></span>
          </div>

          <div>
            <h3>{userData ? userData.name : "Mechanical Buddy"}</h3>

            <p>{userData ? userData.email : "mechanicalbuddy@example.com"}</p>
          </div>
        </div>

        <div className="profile-menu">
          {!userData ? (
            <button
              className="menu-item"
              onClick={() => {
                closeModal();

                navigate("/division");
              }}
            >
              <FiUser />
              Sign In / Sign Up
            </button>
          ) : (
            <button className="menu-item">
              <FiUser />
              View Profile
            </button>
          )}

          <div className="menu-item language-btn">
            <div className="language-left">
              <FiGlobe />
              Language
            </div>

            <select
              className="language-select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="en"
            >
              <option value="en">English</option>

              <option value="hi">हिन्दी</option>

              <option value="bn">বাংলা</option>
            </select>
          </div>

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

          {userData && (
            <button className="menu-item logout-btn" onClick={handleLogout}>
              <FiLogOut />
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
