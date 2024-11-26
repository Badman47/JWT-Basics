const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require("../errors/index.js");

const authenticationMiddleware = async (req, res, next) => {
  // Deconstructing req and saving it in authHeader variable
  const authHeader = req.headers.authorization;
  
  // If unsuccessfull auth request
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
	throw new UnauthenticatedError("No Token Provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    // Next, we match the token and saved JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Deconstructing it by saving it in {id, username}
    const { id, username } = decoded;
    
    // Swapping it with req.user
    // Saving it in req object so it can be accessed through all middlewares
    req.user = { id, username };
    
    // Moving on ...
    next();
	  
  } catch (error) {
	
	  throw new UnauthenticatedError(`Cannot have access to this route: ${error.message}`);
  }
};

//Exporting our module
module.exports = authenticationMiddleware;









 





