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


async function getAirplanes(){
  try {
      const airplanes = await airplaneRepo.getAll();
      return airplanes;
  } catch (error) {
    throw new ApiError(
      "Cannot fetch airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id){
  try {
    const airplane = await airplaneRepo.get(id);
    return airplane;
  } catch (error) {
    if(error.statusCode===StatusCodes.NOT_FOUND){
      throw new ApiError("Airplane you requesed is not present",StatusCodes.NOT_FOUND)
    }
    throw new ApiError(
      "Cannot fetch airplane by id",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane
};
