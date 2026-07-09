const { StatusCodes } = require('http-status-codes');
const { CityServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



/**
 * POST : /cities
 * req-body {name: 'Chicago'}
 */
async function createCity(req, res) {
  console.log(req.body)
  try {
    const city = await CityServices.createCity({
      name: req.body.name
    });
    SuccessResponse.data = city;
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


module.exports = {
  createCity,
}