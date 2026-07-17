const { StatusCodes } = require('http-status-codes');
const { FlightRepository }  = require('../repositories');
const { compareTime } = require('../utils/helpers/datetime-helpers');


const flightRepository = new FlightRepository();

const  AppError  = require('../utils/errors/app-error');  


async function createFlight(data) {
  try {

    if (!isDepartureTimeValid(data.departureTime, data.arrivalTime)) {
      throw new AppError(
        'Departure time cannot be greater than or equal to arrival time',
        StatusCodes.BAD_REQUEST
      );
    }

    const flight = await flightRepository.create(data);
    return flight;

  } catch (error) {

    if (error instanceof AppError) {
      throw error;
    }

    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      'Cannot create a new Flight object',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}



module.exports = {
  createFlight,
}