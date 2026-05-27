import { useState } from 'react'
import { motion } from 'framer-motion'
import './CustomerReg.css'
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaLock, 
  FaCar,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaIdCard
} from 'react-icons/fa'

const CustomerRegisterPage = ({ onBackToLogin, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    vehicleNumber: '',
    vehicleType: '',
    location: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const vehicleTypes = [
    'Select vehicle type',
    'Car',
    'Bike',
    'SUV',
    'Truck',
    'Auto Rickshaw',
    'Bus',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.vehicleNumber) newErrors.vehicleNumber = 'Vehicle number is required'
    if (!formData.vehicleType || formData.vehicleType === 'Select vehicle type') newErrors.vehicleType = 'Please select vehicle type'
    if (!formData.location) newErrors.location = 'Location is required'
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (onRegister) {
        onRegister(formData)
      }
    }, 2000)
  }

  const features = [
    { icon: <FaShieldAlt />, text: '24/7 Roadside Assistance' },
    { icon: <FaClock />, text: 'Fast Response Time' },
    { icon: <FaHeadset />, text: 'Priority Support' }
  ]

  const stats = [
    { value: '12K+', label: 'Happy Customers', icon: <FaUser /> },
    { value: '500+', label: 'Verified Mechanics', icon: <FaCar /> },
    { value: '8 min', label: 'Avg Response', icon: <FaClock /> }
  ]

  return (
    <div className="customer-register-page">
      {/* Background Elements */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb orb1"></div>
      <div className="glow-orb orb2"></div>
      <div className="glow-orb orb3"></div>

      {/* Back Button */}
      <motion.button 
        onClick={onBackToLogin}
        className="back-btn-customer-register"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaArrowLeft /> Back to Login
      </motion.button>

      <div className="customer-register-container">
        {/* Left Side - Branding */}
        <motion.div 
          className="customer-register-branding"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="brand-badge-customer-register">
            <FaCar />
            <span>CUSTOMER REGISTRATION</span>
          </div>
          
          <h1>
            Join Our
            <br />
            <span className="gradient-text-blue">Roadside Assistance</span>
          </h1>
          
          <p>
            Get instant help whenever you need it. Join thousands of satisfied customers 
            who trust Mechanical Buddy for their roadside assistance needs.
          </p>
          
          <div className="feature-list-customer-register">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item-customer-register"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="feature-icon-customer-register">{feature.icon}</div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="stats-row-customer-register">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card-customer-register"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="stat-icon-customer-register">{stat.icon}</div>
                <div className="stat-value-customer-register">{stat.value}</div>
                <div className="stat-label-customer-register">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Registration Form */}
        <motion.div 
          className="customer-register-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="register-header-customer">
            <div className="register-icon-customer">
              <FaUser />
            </div>
            <h2>Customer Registration</h2>
            <p>Create your account to access roadside assistance</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="input-group-customer-register">
              <label><FaUser /> Full Name <span className="required">*</span></label>
              <input
                type="text"
                name="fullName"
                placeholder="Rahul Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message-customer-register">{errors.fullName}</span>}
            </div>

            {/* Mobile Number */}
            <div className="input-group-customer-register">
              <label><FaPhone /> Mobile Number <span className="required">*</span></label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="+91 98765 43210"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={errors.mobileNumber ? 'error' : ''}
              />
              {errors.mobileNumber && <span className="error-message-customer-register">{errors.mobileNumber}</span>}
            </div>

            {/* Email */}
            <div className="input-group-customer-register">
              <label><FaEnvelope /> Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message-customer-register">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="input-group-customer-register">
              <label><FaLock /> Password <span className="required">*</span></label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-message-customer-register">{errors.password}</span>}
              <small className="helper-text">Use at least 6 characters</small>
            </div>

            {/* Confirm Password */}
            <div className="input-group-customer-register">
              <label><FaLock /> Confirm Password <span className="required">*</span></label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message-customer-register">{errors.confirmPassword}</span>}
            </div>

            {/* Vehicle Number */}
            <div className="input-group-customer-register">
              <label><FaIdCard /> Vehicle Number <span className="required">*</span></label>
              <input
                type="text"
                name="vehicleNumber"
                placeholder="MH 01 AB 1234"
                value={formData.vehicleNumber}
                onChange={handleChange}
                className={errors.vehicleNumber ? 'error' : ''}
              />
              {errors.vehicleNumber && <span className="error-message-customer-register">{errors.vehicleNumber}</span>}
            </div>

            {/* Vehicle Type */}
            <div className="input-group-customer-register">
              <label><FaCar /> Vehicle Type <span className="required">*</span></label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className={errors.vehicleType ? 'error' : ''}
              >
                {vehicleTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.vehicleType && <span className="error-message-customer-register">{errors.vehicleType}</span>}
            </div>

            {/* Location */}
            <div className="input-group-customer-register">
              <label><FaMapMarkerAlt /> Location <span className="required">*</span></label>
              <input
                type="text"
                name="location"
                placeholder="Mumbai, Maharashtra"
                value={formData.location}
                onChange={handleChange}
                className={errors.location ? 'error' : ''}
              />
              {errors.location && <span className="error-message-customer-register">{errors.location}</span>}
            </div>

            {/* Terms and Conditions */}
            <div className="checkbox-customer-register">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeTerms">
                I agree to the <span className="link">Terms of Service</span> and <span className="link">Privacy Policy</span>
              </label>
            </div>
            {errors.agreeTerms && <span className="error-message-customer-register">{errors.agreeTerms}</span>}

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              className="register-btn-customer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? <span className="loader"></span> : 'Create Account'}
              {!loading && <FaArrowRight />}
            </motion.button>

            {/* Login Link */}
            <div className="login-link-customer">
              <p>
                Already have an account?{' '}
                <button type="button" onClick={onBackToLogin} className="login-now-btn">
                  Login Now
                </button>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomerRegisterPage