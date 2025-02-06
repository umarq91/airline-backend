const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories/");
const ApiError = require("../utils/errors/app-error");
const airplaneRepo = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepo.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err)=>{
        explanation.push(err.message)
      })
      throw new ApiError(explanation,
        StatusCodes.BAD_REQUEST
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
