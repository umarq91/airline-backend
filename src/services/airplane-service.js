const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories/");
const ApiError = require("../utils/errors/app-error");
const airplaneRepo = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepo.create(data);
    return airplane;
  } catch (error) {
    console.log(error);
    
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err)=>{
        explanation.push(err.message)
      })
      console.log(explanation)
      throw new ApiError(
        explanation.map((ex)=>ex),
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new ApiError(
      "Cannot create a new Airplane Object for some reason",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
};
