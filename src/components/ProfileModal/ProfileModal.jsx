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

const ProfileModal = ({

  closeModal,
  userData,
  setUserData

}) => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('customer');

    localStorage.removeItem('mechanicToken');

    localStorage.removeItem('mechanic');

    setUserData(null);

    closeModal();

    navigate('/');

  };

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
              src={
                userData
                  ? 'https://i.pravatar.cc/100'
                  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
              }
              alt="profile"
              className="profile-avatar"
            />

            <span className="online-dot"></span>

          </div>

          <div>

            <h3>

              {
                userData
                  ? userData.name
                  : 'Mechanical Buddy'
              }

            </h3>

            <p>

              {
                userData
                  ? userData.email
                  : 'mechanicalbuddy@example.com'
              }

            </p>

          </div>

        </div>

        <div className="profile-menu">

          {

            !userData ? (

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

            ) : (

              <button className="menu-item">

                <FiUser />

                View Profile

              </button>

            )

          }

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

          {

            userData && (

              <button
                className="menu-item logout-btn"
                onClick={handleLogout}
              >

                <FiLogOut />

                Sign Out

              </button>

            )

          }

        </div>

      </div>

    </div>

  );

};

export default ProfileModal;