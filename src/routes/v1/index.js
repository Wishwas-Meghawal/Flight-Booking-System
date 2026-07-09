const express = require('express');

const { InfoController } = require('../../controllers');

const airplanesRouter = require('./airplane-routes');

const citiesRouter = require('./city-routes');

const router = express.Router();

router.get('/info', InfoController.info);


router.use('/airplanes',airplanesRouter);
router.use('/cities',citiesRouter);

module.exports = router;