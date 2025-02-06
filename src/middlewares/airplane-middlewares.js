const { StatusCodes } = require("http-status-codes");
const { ErrorReponse } = require("../utils");
const ApiError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorReponse.message = "Something went wrong while creating airplane";

    ErrorReponse.error = new ApiError(['Model number not found in the incoming request'],StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorReponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
