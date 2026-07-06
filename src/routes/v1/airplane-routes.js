const express = require('express');

const { AirplaneController } = require ('../../controllers');
const { AirPlaneMiddlewares } = require('../../middlewares'); 

const router =  express.Router();

// /api/v1/airplanes POST
router.post('/',
    AirPlaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirpalne);

// /api/v1/airplanes GET
router.get('/',
    AirplaneController.getAirplanes);

// /api/v1/airplane/:id GET
router.get('/:id',
    AirplaneController.getAirplane);

// /api/v1/airplane/:id DELETE
router.delete('/:id',
    AirplaneController.destroyAirplane);



module.exports = router;