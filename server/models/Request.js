const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  mechanicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mechanic'
  },

  customerName: String,

  vehicleNumber: String,

  issue: String,

  customerLocation: {

    lat: Number,

    lng: Number

  },

  status: {

    type: String,

    enum: [
      'pending',
      'accepted',
      'rejected'
    ],

    default: 'pending'

  }

}, {

  timestamps: true

});

module.exports =
  mongoose.model(
    'Request',
    requestSchema
  );