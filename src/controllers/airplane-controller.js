const { StatusCodes } = require('http-status-codes');
const { AirplaneServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirpalne(req, res) {
  console.log(req.body)
  try {
    const airpalne = await AirplaneServices.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    });
    SuccessResponse.data = airpalne;
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

/**
 * GET : /airplanes
 * req-body {}
 */
async function getAirplanes(req, res){
  try {
    const airplanes = await AirplaneServices.getAirplanes();
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}


/**
 * GET : /airplanes/:id
 * req-body {}
 */
async function getAirplane(req, res){
  try {
    const airplanes = await AirplaneServices.getAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req, res){
  try {
    const airplanes = await AirplaneServices.destoryAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

module.exports = {
  createAirpalne,
  getAirplanes,
  getAirplane,
  destroyAirplane,
}