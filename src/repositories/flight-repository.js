const CrudRepository = require ('./crud-repositories');

const { Flight,Airport,Airplane } = require('../models');



class FlightRepository extends CrudRepository {
  constructor(){
    super(Flight);
  }

  async getAllFlights(filter,sort){
    const response = await Flight.findAll({
      where:fliter,
      order: sort,
      include: [
        {
          model:Airplane,
          required:true,
          as:'airplane_detail'
        },
        {
          model: Airport,
          as: 'departureAirport'
        },
        {
          model: Airport,
          as: 'arrivalAirport'
        }
      ]
    });
    return response;
  }
}

module.exports = FlightRepository;