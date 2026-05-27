const mongoose = require('mongoose')

const mechanicSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  phone: String,

  experience: String,

  skills: [String],

  currentLocation: {
    lat: Number,
    lng: Number
  },

  isAvailable: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
})

module.exports =
  mongoose.model(
    'Mechanic',
    mechanicSchema
  )