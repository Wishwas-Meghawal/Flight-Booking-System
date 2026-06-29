const { AirplaneRepository }  = require('../repositories');
const airPlanerepository = new AirplaneRepository();

async function createAirplane(data){
  try {
    const airplane = await airPlanerepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane
}