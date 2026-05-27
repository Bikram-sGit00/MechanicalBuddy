import { useState } from 'react'

import { motion } from 'framer-motion'
import axios from 'axios'

import './Mechanic.css'

import {
  useNavigate
} from 'react-router-dom'

import { 
  FaEnvelope, 
  FaLock, 
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaWrench,
  FaGoogle,
  FaPhoneAlt
} from 'react-icons/fa'

const MechanicLoginPage = ({ onLogin, onBackToHome }) => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [errors, setErrors] = useState({})

  const handleLoginChange = (e) => {

    const { name, value, type, checked } = e.target

    setLoginData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : value
    }))

    if (errors[name]) {

      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))

    }

  }

  const validateLogin = () => {

    const newErrors = {}

    if (!loginData.email) {
      newErrors.email = 'Email is required'
    }

    else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!loginData.password) {
      newErrors.password = 'Password is required'
    }

    else if (loginData.password.length < 6) {
      newErrors.password =
        'Password must be at least 6 characters'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

const handleLoginSubmit = async (e) => {

  e.preventDefault()

  if (!validateLogin()) return

  try {

    setLoading(true)

    const response = await axios.post(

      'http://localhost:5000/api/auth/mechanic/login',

      {
        email: loginData.email,
        password: loginData.password
      }

    )

    localStorage.setItem(
      'mechanicToken',
      response.data.token
    )

    localStorage.setItem(
      'mechanic',
      JSON.stringify(response.data.mechanic)
    )

    alert('Mechanic Login Successful')

    navigate('/')

  }

  catch (error) {

    alert(
      error.response?.data?.message ||
      'Login failed'
    )

  }

  finally {

    setLoading(false)

  }

}

  return (

    <div className="mechanic-login-page">

      <div className="cyber-bg"></div>

      <div className="grid-overlay"></div>

      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>

      <motion.button 
        onClick={onBackToHome}
        className="back-btn-mechanic"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >

        ← Back to Home

      </motion.button>

      <div className="mechanic-auth-container">

        <motion.div 
          className="mechanic-branding"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="brand-badge">

            <FaWrench />

            <span>
              MECHANIC PORTAL
            </span>

          </div>

          <h1>

            Welcome Back,
            <br />

            <span className="gradient-text-blue">
              Mechanical Buddy Partner Portal
            </span>

          </h1>

          <p className="brand-description">

            Access your professional dashboard
            to manage emergency service requests,
            connect with nearby drivers,
            and grow your roadside assistance business.

          </p>

          <div className="feature-list-mechanic">

            <div className="feature-item-mechanic">

              <div className="feature-icon-mechanic">
                <FaShieldAlt />
              </div>

              <span>
                Verified Professional Network
              </span>

            </div>

            <div className="feature-item-mechanic">

              <div className="feature-icon-mechanic">
                <FaClock />
              </div>

              <span>
                24/7 Emergency Service Opportunities
              </span>

            </div>

            <div className="feature-item-mechanic">

              <div className="feature-icon-mechanic">
                <FaStar />
              </div>

              <span>
                Ratings, Reviews & Reward System
              </span>

            </div>

          </div>

          <div className="stats-row-mechanic">

            <div className="stat-card-mechanic">

              <div className="stat-icon-mechanic">
                <FaStar />
              </div>

              <div className="stat-value-mechanic">
                12K+
              </div>

              <div className="stat-label-mechanic">
                Drivers Assisted
              </div>

            </div>

            <div className="stat-card-mechanic">

              <div className="stat-icon-mechanic">
                <FaShieldAlt />
              </div>

              <div className="stat-value-mechanic">
                500+
              </div>

              <div className="stat-label-mechanic">
                Verified Mechanics
              </div>

            </div>

            <div className="stat-card-mechanic">

              <div className="stat-icon-mechanic">
                <FaClock />
              </div>

              <div className="stat-value-mechanic">
                8 min
              </div>

              <div className="stat-label-mechanic">
                Average Response
              </div>

            </div>

          </div>

        </motion.div>

        <motion.div 
          className="mechanic-form-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="form-header">

            <div className="form-icon">
              <FaWrench />
            </div>

            <h2>
              Mechanic Login
            </h2>

            <p>
              Secure access to your professional dashboard
            </p>

          </div>

          <form onSubmit={handleLoginSubmit}>

            <div className="input-group-mechanic">

              <label>
                <FaEnvelope />
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="mechanic@example.com"
                value={loginData.email}
                onChange={handleLoginChange}
                className={errors.email ? 'error' : ''}
              />

              {errors.email && (
                <span className="error-message">
                  {errors.email}
                </span>
              )}

            </div>

            <div className="input-group-mechanic">

              <label>
                <FaLock />
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleLoginChange}
                className={errors.password ? 'error' : ''}
              />

              {errors.password && (
                <span className="error-message">
                  {errors.password}
                </span>
              )}

            </div>

            <div className="options-row">

              <label className="checkbox-mechanic">

                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-link"
              >
                Forgot Password?
              </button>

            </div>

            <button 
              type="submit" 
              className="login-btn-mechanic"
              disabled={loading}
            >

              {loading
                ? 'Registering...'
                : 'Login to Dashboard'}

              <FaArrowRight />

            </button>

            <div className="social-login">

              <p>Or continue with</p>

              <div className="social-buttons">

                <button
                  type="button"
                  className="social-btn google"
                >
                  <FaGoogle /> Google
                </button>

                <button
                  type="button"
                  className="social-btn phone"
                >
                  <FaPhoneAlt /> Phone
                </button>

              </div>

            </div>

            <div className="register-link-wrapper">

              <p>

                Don't have an account?

                <button 
                  type="button"
                  className="register-now-btn"
                  onClick={() =>
                    navigate('/mechanic-register')
                  }
                >
                  Register as Hero
                </button>

              </p>

            </div>

          </form>

        </motion.div>

      </div>

    </div>
  )
}

export default MechanicLoginPage