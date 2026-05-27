const express = require('express')

const router = express.Router()

const {

  getAllMechanics

} = require(
  '../controllers/mechanicController'
)

router.get(
  '/',
  getAllMechanics
)

module.exports = router