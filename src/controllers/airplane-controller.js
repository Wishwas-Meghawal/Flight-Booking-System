const { StatusCodes } = require('http-status-codes');
const { AirplaneServices } = require ('../services');
const { response } = require('express');
const { error } = require('winston');

 

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirpalne(req, res){
  console.log(req.body)
  try {
    const airpalne = await AirplaneServices.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    });
    return res
              .status(StatusCodes.CREATED)
              .json({
                  success: true,
                  message: 'Successfully create an airplan',
                  data: airpalne,
                  error: {}
              });
  } catch (error) {
    return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
              success: false,
                message: 'Something went wrong while creating airplane',
                data: {},
                error: error.message
            })
  }
}

module.exports={
  createAirpalne
}