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

/**
 * DELETE : /cities/:id
 * req-body {}
 */
async function deleteCity(req, res){
  try {
    const cities = await CityServices.deleteCity(req.params.id);
    SuccessResponse.data = cities;
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
 * PATCH : /cities/:id
 * req-body {name: 'New York'}
 */

async function updateCity(req, res){
  try {
    const cities = await CityServices.updateCity(req.params.id, req.body);
    SuccessResponse.data = cities;
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
  createCity,
  deleteCity,
  updateCity
}