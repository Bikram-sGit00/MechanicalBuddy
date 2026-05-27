const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const User = require('../models/User')

const Mechanic = require('../models/Mechanic')

const registerCustomer = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body

    const existingUser =
      await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message: 'User already exists'
      })

    }

    const hashedPassword =
      await bcrypt.hash(password, 10)

    const newUser =
      await User.create({

        name,
        email,

        password: hashedPassword

      })

    res.status(201).json({
      message: 'Customer registered successfully',
      user: newUser
    })

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

const loginCustomer = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body

    const user =
      await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: 'User not found'
      })

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: 'Invalid password'
      })

    }

    const token =
      jwt.sign(

        {
          id: user._id
        },

        'mechanicalbuddysecret',

        {
          expiresIn: '7d'
        }

      )

    res.status(200).json({

      message: 'Login successful',

      token,

      user

    })

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

const registerMechanic = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body

    const existingMechanic =
      await Mechanic.findOne({ email })

    if (existingMechanic) {

      return res.status(400).json({
        message: 'Mechanic already exists'
      })

    }

    const hashedPassword =
      await bcrypt.hash(password, 10)

    const mechanic =
      await Mechanic.create({

        name,
        email,

        password: hashedPassword

      })

    res.status(201).json({

      message: 'Mechanic registered successfully',

      mechanic

    })

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

const loginMechanic = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body

    const mechanic =
      await Mechanic.findOne({ email })

    if (!mechanic) {

      return res.status(400).json({
        message: 'Mechanic not found'
      })

    }

    const isMatch =
      await bcrypt.compare(
        password,
        mechanic.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: 'Invalid password'
      })

    }

    const token =
      jwt.sign(

        {
          id: mechanic._id
        },

        'mechanicalbuddysecret',

        {
          expiresIn: '7d'
        }

      )

    res.status(200).json({

      message: 'Mechanic login successful',

      token,

      mechanic

    })

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

module.exports = {

  registerCustomer,
  loginCustomer,

  registerMechanic,
  loginMechanic

}