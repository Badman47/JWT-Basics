const CustomApiError = require("../errors/custom-error.js");
const {StatusCodes} = require("http-status-codes");

//Extending a unauthenticatedError class from CustomApiError
class unauthenticatedError extends CustomApiError {
	constructor(message) {
	super(message)
	this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}
module.exports = unauthenticatedError;
