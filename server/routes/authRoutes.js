const express = require('express')

const router = express.Router()

const {

  registerCustomer,
  loginCustomer,

  registerMechanic,
  loginMechanic

} = require('../controllers/authController')

router.post(
  '/customer/register',
  registerCustomer
)

router.post(
  '/customer/login',
  loginCustomer
)

router.post(
  '/mechanic/register',
  registerMechanic
)

router.post(
  '/mechanic/login',
  loginMechanic
)

module.exports = router