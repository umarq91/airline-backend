const { StatusCodes } = require("http-status-codes");
const { ErrorReponse } = require("../utils");
const ApiError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorReponse.message = "Name must be provided";

    ErrorReponse.error = new ApiError(['City Name not found in the incoming request'],StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorReponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
