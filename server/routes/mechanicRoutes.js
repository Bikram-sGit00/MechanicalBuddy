const express = require('express')

const router = express.Router()

const {

  getAllMechanics,

  updateMechanicLocation

} = require(
  '../controllers/mechanicController'
)

router.get(
  '/',
  getAllMechanics
)

router.post(
  '/update-location',
  updateMechanicLocation
)

module.exports = router