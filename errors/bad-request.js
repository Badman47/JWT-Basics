const CustomApiError = require("../errors/custom-error.js");
const {StatusCodes} = require("http-status-codes")

//Created a custom BadRequest error
class BadRequest extends CustomApiError  {
	constructor(message, statusCode) {
	super(message)
	this.statusCode = StatusCodes.BAD_REQUEST;
	}
}

module.exports = BadRequest;
