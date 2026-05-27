import { useState } from 'react'
import { motion } from 'framer-motion'
import './MechanicReg.css'
import { 
  FaUser, 
  FaStore, 
  FaPhone, 
  FaEnvelope, 
  FaLock, 
  FaTools, 
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaShieldAlt,
  FaMoneyBillWave,
  FaAward
} from 'react-icons/fa'

const MechanicRegisterPage = ({ onBackToLogin, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    garageName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    serviceType: '',
    location: '',
    experience: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const serviceOptions = [
    'Select your primary service',
    'Engine Repair',
    'Battery Service',
    'Fuel Delivery',
    'Towing Service',
    'Tire Service',
    'AC Repair',
    'Electrical Service',
    'Brake Service'
  ]

  const experienceOptions = [
    'Select experience level',
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years'
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
    if (!formData.garageName) newErrors.garageName = 'Garage/Shop name is required'
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.serviceType || formData.serviceType === 'Select your primary service') newErrors.serviceType = 'Please select a service type'
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

  return (
    <div className="register-page-full">
      <div className="register-container-full">
        {/* Left Side - Branding */}
        <motion.div 
          className="register-branding-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="register-badge-full">
            <FaTools />
            <span>MECHANIC REGISTRATION</span>
          </div>
          
          <h1>
            Join Our
            <br />
            <span className="gradient-text-blue">Mechanic Network</span>
          </h1>
          
          <p>Become a trusted partner and help drivers in need while growing your business.</p>
          
          <div className="register-features-full">
            <div className="register-feature-full">
              <div className="feature-icon-full"><FaShieldAlt /></div>
              <div>
                <h4>Verified & Trusted Platform</h4>
                <p>Join a network of verified professionals</p>
              </div>
            </div>
            <div className="register-feature-full">
              <div className="feature-icon-full"><FaMoneyBillWave /></div>
              <div>
                <h4>Earn Competitive Rates</h4>
                <p>Set your own prices and grow your business</p>
              </div>
            </div>
            <div className="register-feature-full">
              <div className="feature-icon-full"><FaAward /></div>
              <div>
                <h4>Build Your Reputation</h4>
                <p>Get reviews and become a top mechanic</p>
              </div>
            </div>
          </div>

          <div className="register-stats-full">
            <div className="register-stat-full">
              <div className="stat-number-full">12K+</div>
              <div className="stat-label-full">Drivers Helped</div>
            </div>
            <div className="register-stat-full">
              <div className="stat-number-full">500+</div>
              <div className="stat-label-full">Active Mechanics</div>
            </div>
            <div className="register-stat-full">
              <div className="stat-number-full">24/7</div>
              <div className="stat-label-full">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          className="register-form-card-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <button onClick={onBackToLogin} className="register-back-btn">
            <FaArrowLeft /> Back to Login
          </button>

          <div className="register-form-header-full">
            <div className="register-form-icon-full">
              <FaTools />
            </div>
            <h2>Mechanic Registration</h2>
            <p>Join the smart roadside assistance network</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="register-form-row-full">
              <div className="register-form-group-full">
                <label><FaUser /> Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="register-form-group-full">
                <label><FaStore /> Garage/Shop Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="garageName"
                  placeholder="Sharma Auto Repairs"
                  value={formData.garageName}
                  onChange={handleChange}
                  className={errors.garageName ? 'error' : ''}
                />
                {errors.garageName && <span className="error-text">{errors.garageName}</span>}
              </div>
            </div>

            <div className="register-form-row-full">
              <div className="register-form-group-full">
                <label><FaPhone /> Mobile Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="+91 98765 43210"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={errors.mobileNumber ? 'error' : ''}
                />
                {errors.mobileNumber && <span className="error-text">{errors.mobileNumber}</span>}
              </div>

              <div className="register-form-group-full">
                <label><FaEnvelope /> Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="mechanic@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="register-form-row-full">
              <div className="register-form-group-full">
                <label><FaLock /> Password <span className="required">*</span></label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
                <small className="helper-text">Use at least 6 characters</small>
              </div>

              <div className="register-form-group-full">
                <label><FaLock /> Confirm Password <span className="required">*</span></label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="register-form-row-full">
              <div className="register-form-group-full">
                <label><FaTools /> Service Type <span className="required">*</span></label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={errors.serviceType ? 'error' : ''}
                >
                  {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.serviceType && <span className="error-text">{errors.serviceType}</span>}
              </div>

              <div className="register-form-group-full">
                <label><FaMapMarkerAlt /> Location <span className="required">*</span></label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, Area, Pin Code"
                  value={formData.location}
                  onChange={handleChange}
                  className={errors.location ? 'error' : ''}
                />
                {errors.location && <span className="error-text">{errors.location}</span>}
              </div>
            </div>

            <div className="register-form-group-full full-width">
              <label>Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                {experienceOptions.map(exp => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>

            <div className="register-checkbox-full">
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
            {errors.agreeTerms && <span className="error-text">{errors.agreeTerms}</span>}

            <button 
              type="submit" 
              className="register-submit-btn-full"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register as Mechanic'}
              <FaArrowRight />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default MechanicRegisterPage