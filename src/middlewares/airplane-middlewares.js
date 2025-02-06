const { StatusCodes } = require("http-status-codes");
const { ErrorReponse } = require("../utils");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorReponse.message = "Something went wrong while creating airplane";
    ErrorReponse.error = {
      explanation: "Model Number are not found in the incoming",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorReponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
