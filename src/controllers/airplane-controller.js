const { AirplaneSerice } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
  try {
    const response = await AirplaneSerice.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully created Successfully",
      error: {},
      data: response,
    });
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong",
      error: error,
      data: {},
    });
  }
}


module.exports = {createAirplane}