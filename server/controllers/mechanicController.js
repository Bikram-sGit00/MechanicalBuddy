const Mechanic =
  require('../models/Mechanic')

const getAllMechanics =
  async (req, res) => {

    try {

      const mechanics =
        await Mechanic.find()

      res.status(200).json(mechanics)

    }

    catch (error) {

      res.status(500).json({
        message: error.message
      })

    }

}

const updateMechanicLocation =
  async (req, res) => {

    try {

      const {
        mechanicId,
        lat,
        lng
      } = req.body

      const updatedMechanic =
        await Mechanic.findByIdAndUpdate(

          mechanicId,

          {
            currentLocation: {
              lat,
              lng
            }
          },

          {
            new: true
          }

        )

      res.status(200).json({
        message:
          'Location updated',
        mechanic:
          updatedMechanic
      })

    }

    catch (error) {

      res.status(500).json({
        message: error.message
      })

    }

}

module.exports = {

  getAllMechanics,

  updateMechanicLocation

}