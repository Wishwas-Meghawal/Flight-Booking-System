const { StatusCodes } = require('http-status-codes');
const { FlightServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST : /flights
 * flightNumber: "AI101",
 * airplaneId: 1,
 * departureAirportId: 1,
 * arrivalAirportId: 2,
 * departureTime: "2026-07-20T10:30:00.000Z",
 * arrivalTime: "2026-07-20T13:15:00.000Z",
 * price: 6500,
 * boardingGate: "A12",
 * totalSeats: 180
 * }
 */

async function createFlight(req, res) {
  console.log(req.body)
  try {
    const flight = await FlightServices.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.data = flight;
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
  createFlight,
}