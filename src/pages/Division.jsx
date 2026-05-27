import './Division.css'

import { motion } from 'framer-motion'

import {
  FaUser,
  FaWrench,
  FaCar,
  FaRoad,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaArrowRight
} from 'react-icons/fa'

import {
  useNavigate
} from 'react-router-dom'

const Division = () => {

  const navigate = useNavigate()

  const features = [
    { icon: <FaCar />, text: '24/7 Roadside Assistance' },
    { icon: <FaShieldAlt />, text: 'Verified Professionals' },
    { icon: <FaClock />, text: 'Fast Response Time' }
  ]

  const stats = [
    { value: '12K+', label: 'Drivers Helped', icon: <FaStar /> },
    { value: '500+', label: 'Verified Mechanics', icon: <FaShieldAlt /> },
    { value: '15 min', label: 'Average Response', icon: <FaClock /> }
  ]

  return (
    <div className="unified-login-page">

      <div className="cyber-bg"></div>

      <div className="grid-overlay"></div>

      <div className="particles-container-unified"></div>

      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>

      <div className="unified-container">

        <motion.div
          className="unified-branding"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="brand-badge">
            <FaRoad />
            <span>
              Emergency Vehicle Assistance Anytime, Anywhere
            </span>
          </div>

          <h1>
            Welcome To
            <br />

            <span className="gradient-text-blue">
              Mechanical Buddy
            </span>

          </h1>

          <p className="brand-description">
            India's fastest roadside assistance platform.
            Connect with verified mechanics,
            get emergency support,
            and track live help instantly.
          </p>

          <div className="feature-list-unified">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                className="feature-item-unified"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >

                <div className="feature-icon-unified">
                  {feature.icon}
                </div>

                <span>{feature.text}</span>

              </motion.div>

            ))}

          </div>

          <div className="stats-row-unified">

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                className="stat-card-unified"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >

                <div className="stat-icon-unified">
                  {stat.icon}
                </div>

                <div className="stat-value-unified">
                  {stat.value}
                </div>

                <div className="stat-label-unified">
                  {stat.label}
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

        <motion.div
          className="unified-login-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="login-header-unified">

            <div className="cyber-lock-icon">
              <FaUser />
            </div>

            <h2>
              Choose your login type
            </h2>

            <p>
              Select your role to continue
            </p>

          </div>

          <div className="login-options">

            <motion.button
              className="login-option-btn customer-btn"
              onClick={() =>
                navigate('/customer-auth')
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >

              <div className="btn-icon">
                <FaCar />
              </div>

              <div className="btn-content">

                <h3>Customer Login</h3>

                <p>
                  Request roadside assistance,
                  track mechanics,
                  get emergency help
                </p>

              </div>

              <div className="btn-arrow">
                <FaArrowRight />
              </div>

            </motion.button>

            <motion.button
              className="login-option-btn mechanic-btn"
              onClick={() =>
                navigate('/mechanic-auth')
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >

              <div className="btn-icon">
                <FaWrench />
              </div>

              <div className="btn-content">

                <h3>Mechanic Login</h3>

                <p>
                  Manage service requests,
                  accept jobs,
                  grow your business
                </p>

              </div>

              <div className="btn-arrow">
                <FaArrowRight />
              </div>

            </motion.button>

          </div>

          <div className="register-prompt">

            <p>
              New to Mechanical Buddy?{' '}

              <span className="register-link-unified">
                Create an account
              </span>

            </p>

          </div>

          <div className="live-status-indicator">

            <div className="status-dot"></div>

            <span>
              2,847 active users right now
            </span>

          </div>

        </motion.div>

      </div>

    </div>
  )
}

export default Division