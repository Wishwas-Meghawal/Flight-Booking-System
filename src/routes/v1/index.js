const express = require('express');

const { InfoController } = require('../../controllers');

const airplanesRouter = require('./airplane-routes')

const router = express.Router();

router.get('/info', InfoController.info);


router.use('/airplanes',airplanesRouter);

module.exports = router;