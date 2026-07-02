const { StatusCodes } = require('http-status-codes');
const { AirplaneServices } = require ('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');
 

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
    SuccessResponse.data = airpalne;
    return res
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch (error) {
  // console.log("Full Error:", error);
  // console.log("statusCode:", error.statusCode);
  // console.log("name:", error.name);

  ErrorResponse.error = error  ;  

  return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}
}

module.exports={
  createAirpalne
}