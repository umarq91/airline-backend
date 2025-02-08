const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorReponse } = require("../utils");

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorReponse.error = error;
    res.status(error.statusCode).json(ErrorReponse);
  }
}

module.exports = {
  createCity,
};
