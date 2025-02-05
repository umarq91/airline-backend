const {AirplaneRepository} = require("../repositories/"); // Correct path to AirplaneRepository
const airplaneRepo = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepo.create(data); // Uncommented and fixed
    return airplane;
  } catch (error) {
    console.error("Error creating airplane:", error); // Improved error logging
    throw error;
  }
}

module.exports = {
  createAirplane,
};
