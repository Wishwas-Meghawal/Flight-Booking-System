const express = require('express');

const { InfoController } = require('../../controllers');

const airplanesRouter = require('./airplane-routes');

const citiesRouter = require('./city-routes');

const airportRouter = require('./airport-routes');

const flightRouter = require('./flight-routes');

const router = express.Router();

router.get('/info', InfoController.info);


router.use('/airplanes',airplanesRouter);
router.use('/cities',citiesRouter);
router.use('/airports',airportRouter);
router.use('/flights',flightRouter);

module.exports = router;