const { StatusCodes } = require("http-status-codes");
const { CityReposity } = require("../repositories");
const ApiError = require("../utils/errors/app-error");

const cityRepo = new CityReposity();

async function createCity(data) {
  try {
    const city = await cityRepo.create(data);
    return city;
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      "SequelizeUniqueConstraintError"
    ) {
      
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new ApiError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new ApiError(
      "Cannot create a new City Object for some reason",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
};
