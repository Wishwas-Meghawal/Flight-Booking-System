const CrudRepository = require ('./crud-repositories');

const { City } = require('../models');

console.log("City Model:", City);

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}
module.exports = CityRepository;