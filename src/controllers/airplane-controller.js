const { AirplaneSerice } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorReponse } = require("../utils");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneSerice.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorReponse.error = error;
    res.status(error.statusCode).json(ErrorReponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneSerice.getAirplanes();
    SuccessResponse.data = airplanes;
    res.status(StatusCodes.OK).json(SuccessResponse);
    return airplanes;
  } catch (error) {
    ErrorReponse.error = error;
    res.status(error.statusCode).json(ErrorReponse);
  }
}

/*
-> /airplanes/:id GET
body : {}
*/
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneSerice.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorReponse.error = error;
    res.status(error.statusCode).json(ErrorReponse);
  }
}

/*
-> /airplanes/:id DELTE
body : {}
*/
async function deleteAirplane(req, res) {
  try {
    const airplane = await AirplaneSerice.deleteAirplane(req.params.id);
    SuccessResponse.message = "Successfully deleted";
    SuccessResponse.data = airplane
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorReponse.error = error;
    res.status(error.statusCode).json(ErrorReponse);
  }
}
module.exports = { createAirplane, getAirplanes, getAirplane,deleteAirplane };
