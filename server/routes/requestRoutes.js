const express = require('express');

const router = express.Router();

const Request = require('../models/Request');



router.post(
  '/create',
  async (req, res) => {

    try {

      const newRequest =
        new Request(req.body);

      await newRequest.save();

      res.status(201).json({

        message:
          'Request created',

        request:
          newRequest

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error'

      });

    }

  }
);



router.get(
  '/mechanic/:mechanicId',
  async (req, res) => {

    try {

      const requests =
        await Request.find({

          mechanicId:
            req.params.mechanicId,

          status:
            'pending'

        });

      res.json(requests);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error'

      });

    }

  }
);



router.put(
  '/accept/:requestId',
  async (req, res) => {

    try {

      const updatedRequest =
        await Request.findByIdAndUpdate(

          req.params.requestId,

          {

            status:
              'accepted'

          },

          {

            new: true

          }

        );

      res.json(updatedRequest);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error'

      });

    }

  }
);



router.put(
  '/reject/:requestId',
  async (req, res) => {

    try {

      const updatedRequest =
        await Request.findByIdAndUpdate(

          req.params.requestId,

          {

            status:
              'rejected'

          },

          {

            new: true

          }

        );

      res.json(updatedRequest);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          'Server Error'

      });

    }

  }
);

module.exports = router;