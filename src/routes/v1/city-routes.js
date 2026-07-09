const express = require('express');

const { CityController } = require ('../../controllers');
//const { AirPlaneMiddlewares } = require('../../middlewares'); 
const { route } = require('./airplane-routes');

const router =  express.Router();


// /api/v1/cities POST
router.post('/',
  CityController.createCity);




module.exports = router;